import React from "react";
import observerExample from './res/retain-cycles-observers.png';
import observerExampleFixed from './res/retain-cycles-observers-fixed.png';
import storedClosure from './res/retain-cycles-stored-closure.png';
import img1 from './res/retain-cycles-img1.png';
import img2 from './res/retain-cycles-img2.png';
import img3 from './res/retain-cycles-img3.png';
import img4 from './res/retain-cycles-img4.png';
import img5 from './res/retain-cycles-img5.png';
import {HeaderTitle, Quoted, SubHeaderTitle, Image, NavBar, NavChild, PageContainer,PageTextContainer, LinkWithImage, BulletPoint, VStack, Code} from '../components/BasicComponents';

export class RetainCycles extends React.Component{ render() {
    return(
        <PageContainer>
            <NavBar>
                <NavChild linkName={"Back"} style={{fontWeight: "bold", fontSize: "1.1em"}} link={"#/"}/>
            </NavBar>

            <HeaderTitle name={"ARC and Retain Cycles Demystified"} subtitle = {
                "Learn about retain cycles, how to avoid retain cycles, leaks vs retain cycles, common spots for retain cycles, common false positive retain cycles, debugging retain cycles, testing that prevents retain cycles"
            }/>
            <PageTextContainer>

            <SubHeaderTitle name={"ARC Definition"}/>
            <p>Starting off with automatic reference counting or arc for short is basically
                a memory allocator and deallocator that abstracts out memory management.
                 If you’re familiar with C then this deals with functions like malloc
                  and free in regards to dynamic memory
            </p>

            <SubHeaderTitle name={"Object Deallocation"}/>
            <p>
            The most important thing you to know about arc is when it will deallocate your objects.
             This is critical for understanding how retain cycles are formed and how we can prevent them.
              I will explain this in detail via examples, but in short once there are no more references
               pointing to an object it will be deallocated.
            </p>

            <p>
            Before jumping into an example, it should be noted that only types that
             are passed by reference play a role in arc. This includes Class and
              closure types and excludes value types like struct, Int, enum etc
            </p>

            <p>
            Alright lets look at an example
            </p>

            <Image imgSrc = {img1}/>
            
            <p>
            Looking at the example It makes sense that once the function foo executes
             and returns our instance is no longer in memory as it’s out of scope and can’t be used.
            </p>

            <p>
            But what is really happening here that allows arc to know
             it’s safe to remove this object from memory?
            </p>

            <p>
            If we break this down. ClassA is being initialized and returns a reference to
             our new ClassA object in memory. This in turn increases the number of
              references being held on the object to 1. 
            </p>

            <p>
            Then the function goes out of scope and the reference is removed.
             Bringing the reference count back down to 0 aka safe for deallocation.  
            </p>

            <p>
            Looking at a different example
            </p>

            <Image imgSrc = {img2}/>

            <p>
            This time we have an extra reference pointing to the same object.
             Meaning the reference count gets up to 2 and once the foo function
              returns the reference count on the object goes to 1 keeping the
               object alive past the scope of the foo function.  
            </p>

            <SubHeaderTitle name={"Retain Cycles"}/>

            <p>
            Now that we know when an object is deallocated we can move on to retain cycles.
            </p>

            <p>
            A retain cycle forms when object(s) in an object graph hold a strong reference(s)
             to an ancestor forming a loop / cycle blocking objects from being automatically deallocated 
            </p>

            <p>
            I will explain the idea of a strong reference later on,
             but for know just treat a strong reference as quote unquote normal reference.
              Like the ones we've seen in the above examples
            </p>

            <p>
            If we look at a basic retain cycle example   
            </p>

            <Image imgSrc = {img3}/>

            <p>
            Here Class A holds a strong reference to Class B which holds a strong reference to Class C
            </p>

            <p>
            If we stopped at this point there would be no retain cycle as once A is deallocated
             the domino falls making B no longer referenced aka deallocated and then finally C
              is deallocated.
            </p>

            <p>
            If we now say Class C has a strong reference to Class A.
             We now form a cycle from A to C and back to A … repeating.
              The domino can’t fall because Class A has an extra reference held by class C
            </p>

            <p>
            It should be noted that there isn’t a limit to the number
             of objects involved in a retain cycle. In the above example
              I used 3, but this could be 5, 10, or 50 it doesn’t matter. 
            </p>

            <p>
            This retain is relatively easy to spot, but Retain cycles can show up
             in different disguising ways. One of these ways is with closures
              this is why often closures are a `weak self` magnets as this is
               probably the spot that is the most confusing for people in regard
                to knowing what causes a retain cycle and what doesn’t, but
                 with a good understanding of what causes retain cycles in the
                  first place it will make it clear what causes
                   a retain cycle and what doesn’t.
            </p>

            <p>
            Lets look at the following example
            </p>

            <Image imgSrc = {img4}/>

            <p>
            Here we have a class Downloader that has an instance property 
            onComplete thats type is an optional closure. This property is
             assign on during in a method call and the closure calls an
              instance method called completed. 
            </p>

            <p>
            This code causes a retain cycle. The key to knowing why is to remember
             closures are passed by reference meaning that there exists some block 
             of memory that holds our closure code and any captured properties. 
             In this case the captured property is self. One thing I do that
              I find helpful is to imagine every closure as a kind of unstructured class
               that has instance properties for what ever is captured. 
            </p>

            <p>
            So if we instead imagine something like this
            </p>

            <Image imgSrc = {img5}/>

            <p>
            It’s a little bit more clear why theres a retain cycle.
             Downloader holds a reference to MyClosure which holds a 
             reference back to Downloader or self.
            </p>

            <SubHeaderTitle name={"How to avoid retaining cycles"}/>

            <p>
            Now that we know what a retain cycle is how they are created.
             How can they be avoided or fixed?  
            </p>

            <p>
            Well, we can replace our strong references with weak or unowned references.
             We will get into the differences of weak and unowned,
              but for now just know weak is almost often the better choice
               for reasons we will get into later.
            </p>

            <p>
            These different reference types avoid retain cycles by allowing
             us to hold a reference to an object without increasing
              the reference count of that object.
            </p>

            <p>
            For example, lets look at fixing our first basic retain cycle 
            </p>

            <Image imgSrc = {img2}/>

            <p>
            If we instead make the reference in the C class to weak we avoid the retain cycle. 
            </p>

            <p>
            Now getting into the differences between weak and unowned references
             Weak references requires that the property or variable is not a constant
              and is an optional. The reason for these requirements is because now there
               exists a possibility that the Class C instance will out live the Class A instance.
            </p>

            <Quoted>
                <p>Imagine the following classes A, B, C <br></br>
                Class A has a property that holds a strong reference to Class B<br></br>
                Class B has a property that holds a strong reference to Class C<br></br>
                Currently, at this point, there is no retain cycle.<br></br>
                
                </p>
                <p> Our object graph looks like:</p>
                <p style={{margin: "0px 200px"}}>A → B → C</p>
                <p>
                If A is deallocated the domino has fallen. B is no longer referenced.
                 Boom deallocated. Whoo C is now no longer referenced. Deallocated! 
                </p>
                <p>
                If we now say Class C has a strong reference to Class A.
                 We now form a cycle from A to C back to A … repeating.
                 The domino can’t fall because Class A
                 has an extra reference count because of the reference held by class C
                </p>
                <p style={{margin: "0px 150px"}}>A → B → C → A → ...</p>
            </Quoted>


            <SubHeaderTitle name={"How to avoid retaining cycles - Weak & Unowned References"}/>
            <p>
            To avoid retain cycles we can make our references weak or unowned<br></br>  

            Both unowned and weak keep references to another object without
            increasing the reference count on that object.
            </p>

            <Quoted>
                <p>A weak reference is required to be an
                    optional type and non-constant
                </p>

                <p>An unowned reference is a weak 
                    reference without the requirements of a weak ref
                </p>
          
            </Quoted>

            <p>
            By using an unowned reference you are in a way promising that it will be non-nil for
             the life time of the reference. Or technically an implicitly unwrapped optional.
             </p>

            <p>
            In other words, by using the unowned reference type you are sure
            that the reference won’t outlive the object.
            If used when nil this will cause a crash. Its generally is better to just use weak
            and check if nil. 
            </p>

            <p>
            That's why weak references are required to be optional
             because the instance can be deallocated when we want
              to interact with its properties or functions etc.
            </p>
            <SubHeaderTitle name={"Consequences of Retain Cycles"}/>
            <p>
            When you have a retain cycle this memory will exist for
             as long as your application is alive. So, if you have
             a retain cycle in a common routine it can lead to
             memory warnings and if left unresolved crashes.
            </p>

            <SubHeaderTitle name={"Common Spots For Retain Cycles"}/>
            <p>
            From doing a lot of iOS code reviews there becomes common spots
             where retain cycles a raise more often. Some of these are
             Publishers & Subscribers, Delegates, and any escaping closures
             that are stored should be a red flag. 
            </p>

            <b>Observers</b>
            <p>
            It's common to subscribe to some publisher 
            and store some closure on an instance property.
            </p>
            
            <Image imgSrc = {observerExample}/>
     
            <p>
            This type of retain cycle is so common and not as easy to see
             compared to the basic class reference pattern. 
            </p>

            <p>
            The retain cycle here is because the sink closure captures
             a strong reference to self So this increases the reference
             count on A by 1. So for A to be deallocated, this closure
             is going to need to be deallocated first, but we are storing
             this closure in the sub property of A which is deallocated when
             A is deallocated.  Retain cycle!
            </p>

            <p>
            We can fix this by having the closure capture
             a weak reference instead of a strong reference 
            </p>

            <Image imgSrc = {observerExampleFixed}/>

            <SubHeaderTitle name={"Delegation"}/>

            <p>
            Delegation is a very common pattern when communicating between views.
             The nature of delegation involves a View A holding on to a View B
             and responding to changes in B. View A assigns itself as the delegate/responder
             of these changes. Side note this involves that A conforms to the delegate. 
            </p>

            <Quoted>
                <p>
                So currently A → B and the delegate property in B point back to A
                <br></br>
                A → B, and B → A 
                </p>
            </Quoted>

            <p>
            Often we resolve this retain cycle by 
            making the delegate reference weak.
            </p>

            <SubHeaderTitle name={"Stored Closure"}/>
            <p>
            Like the Publisher and Subscriber example, it's important to know when
             a closure can be safely retained and when it has to weakly capture a reference. 
            </p>

            <Image imgSrc = {storedClosure}/>

            <p>
            Notice that not capturing a weak reference to self would cause a retain cycle
            </p>
  
            </PageTextContainer>
            <div style = {{height: "90vh"}}></div>
        </PageContainer>
    );
}
}