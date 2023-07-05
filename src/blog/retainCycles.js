import React from "react";
import observerExample from './res/retain-cycles-observers.png';
import observerExampleFixed from './res/retain-cycles-observers-fixed.png';
import storedClosure from './res/retain-cycles-stored-closure.png';
import img1 from './res/retain-cycles-img1.png';
import img2 from './res/retain-cycles-img2.png';
import img3 from './res/retain-cycles-img3.png';
import img4 from './res/retain-cycles-img4.png';
import img5 from './res/retain-cycles-img5.png';
import img6 from './res/retain-cycles-img6.png';
import img7 from './res/retain-cycles-img7.png';
import img8 from './res/retain-cycles-img8.png';
import img9 from './res/retain-cycles-img9.png';
import img10 from './res/retain-cycles-img10.png';
import img11 from './res/retain-cycles-img11.png';
import img12 from './res/retain-cycles-img12.png';
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
            <p>ARC = automatic reference counting is basically
                a memory allocator and deallocator that abstracts out memory management.
                If you’re familiar with C then this deals with functions like malloc
                and free in regards to dynamic memory.
            </p>

            <SubHeaderTitle name={"Object Deallocation"}/>
            <p>
            The most important thing you need to know about arc is when it will deallocate your objects.
             This is critical for understanding how retain cycles are formed and how we can prevent them.
              I will explain this in detail via examples, but in short once there are no more references
               pointing to an object it will be deallocated.
            </p>

            <p>
            Before jumping into an example, it should be noted that only types that
             are passed by reference play a role in arc. This includes class and
              closure types and excludes value types like struct, Int, enum etc
            </p>

            <p>
            Alright lets look at an example
            </p>

            <Image imgSrc = {img1}/>
            
            <p>
            Looking at the example It makes sense that once the function "example" executes
             and returns, our instance is no longer in memory as it’s out of scope and can’t be used.
            </p>

            <p>
            But what is really happening here that allows arc to know
             it’s safe to remove this object from memory?
            </p>

            <p>
            Assuming we ignore any complier optimizations, breaking this down
             ClassA is being initialized and returns a reference to
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
             Meaning the reference count gets up to 2 and once the "example" function
              returns the reference count on the object goes to 1 keeping the
               object alive past the scope of the "example" function.  
            </p>

            <SubHeaderTitle name={"Retain Cycles"}/>

            <p>
            Now that we know when an object is deallocated we can move on to retain cycles.
            </p>

            <p>
            A retain cycle forms when object(s) in an object graph hold a strong reference(s)
             to an ancestor forming a loop / cycle with-in the graph blocking objects from being automatically deallocated 
            </p>

            <p>
            I will explain the idea of a strong reference later on,
             but for know just treat a strong reference as quote unquote normal reference.
              Like the ones we've seen in the above examples.
            </p>

            <p>
            If we look at a basic retain cycle example   
            </p>

            <Image imgSrc = {img3}/>
            <p>Edit - Assume instance properties are not constants</p>

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
                to knowing what causes a retain cycle and what doesn’t. A good understanding
                 of what causes retain cycles in the first place it will make it clear what causes
                   a retain cycle and what doesn’t.
            </p>

            <p>
            Lets look at the following example
            </p>

            <Image imgSrc = {img4}/>

            <p>
            Here we have a class Downloader that has an instance property 
            onComplete thats type is an optional closure. This property is
             assigned during a method call and the closure calls an
              instance method called completed. 
            </p>

            <p>
            This code causes a retain cycle. The key to knowing why is to remember
             closures are passed by reference meaning that there exists some block 
             of memory that holds our closure code and any captured properties. 
             In this case the captured property is a ref to self. One thing I do that
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

            <Image imgSrc={img6}/>

            <p>
            As you can see if we instead use a weak reference pointing from C to A we avoid the retain cycle.
            </p>

            <p>
                 Now diving into what weak references are and the differences between weak and unowned references. 
                 Weak references requires that the property or variable be a non constant and is an optional. 
  
            </p>
           
            <p>
            The reason for these requirements is because now there exists a possibility that
                 the Class C instance will out live the Class A instance. This is possible when another
                  class other than A and B holds a reference to C assuming this new object 
                  doesn’t get deallocated in result of the deallocation of A or B   
            </p>

            <p>
            Owned reference types do the same as weak reference types, but without 
            the requirements that weak has
            </p>

            <p>
            In other words, by using the unowned reference type you are promising 
            that this property or variable won’t outlive its reference it lives in.
             This is often called an implicitly unwrapped optional, but If used when
              nil this will cause a crash. This is why it is better to just use weak 
              and check if nil.
            </p>

            <p>
            Lets look at safe unowned example
            </p>
            <Image imgSrc={img7}/>

            <p>
            Here we safety capture an owned self reference in our closure. Only this instance can
            hold a reference to this closure due to the private access level ensuring theres no chance
            for our closure to be kept alive past the Downloader instance being deallocated
            </p>
            <p>
            Retain cycles can cause some nasty memory issues in your app.
            Often the consequences of retain cycles are not visible, but if you 
            fine you’re self causing a retain cycle in a common routine in your app
            this can lead to memory warnings via App Delegate and posted notifications 
            and if left unresolved your app will crash. 
            </p>
            <p> 
            There are some common red flags and patterns for retain cycles.
             Knowing these will help you improve your code and help you with code review. 
            </p>
            <p>
            A common red flag is when a closure is stored / held in any way.
             This should set off alarm bells to check that there isn’t any retain cycles.
              Note that storing closures isn’t necessarily bad it just should be done carefully.
            </p>

            <p>
            Patterns that often deal with stored closures are the Combine Framework
            </p>
            <p>
            Take this example
            </p>
            <Image imgSrc={img8}/>
            <p>
            This type of retain cycle is so common and not as easy to see compared
             to the basic class reference pattern. 
            </p>
            <p>
            The retain cycle here is because the sink closure captures a strong reference
            to `self` So this increases the reference count on A by 1. So for A to be deallocated,
            this closure is going to need to be deallocated first, but we are storing
            this closure in the `sub` property of A which is deallocated when A is deallocated.
            Retain cycle!
            </p>
            <p>
            We can fix this by having the closure capture a weak reference
             instead of a strong reference
            </p>
            <Image imgSrc={img9}/>

            <p>
            Delegation is also a very common pattern for retain cycles to appear
             in is due to the nature of delegation. This involves a View A holding on 
             to a View B and responding to changes in B. View A assigns itself
              as the delegate/responder of these changes. Side note this involves
               that A conforms to the delegate. 
            </p>

            <p>
            Objects that allow a delegate should always have their delegate reference to be weak
            </p>

            <p>
            Another common pattern is retain cycles caused by
             API miss use. An example of this is incorrect use of Timers.
            </p>

            <p>
            For instance given the following repeating timer
            </p>

            <Image imgSrc={img10}/>

            <p>
            Since our timer is marked has repeating the Timer schedules the closure 
            to fire on the main run loop indefinitely until the timer is invalidated.
             In other words this means the timer will hold a strong reference a strong
              reference indefinitely. 
            </p>

            <p>
            We looked at APIs that commonly cause retain cycles, but there are common
             false positive retain cycle patterns as well. Often people confused escaping
              closures with causing retain cycles and as a spot where we should have weak
               references always. Although it’s true that for a closure to cause a retain
                cycle it must be escaping its wrong to think its the root cause. The root 
                cause of the retain cycle is that its retained / held by the instance tha
                 created it or another instance it was passed to.
            </p>

            <p>
            Often you will see code like the following
            </p>

            <Image imgSrc={img11}/>

            <p>
            The [weak self] doesn’t resolve a retain cycle here and this for one specific reason.
             The DispatchQueue will dispose of its strong reference to the closure once the block
              is executed. Using a strong reference may actually be preferred as it ensures that
               the block gets executed even if it has to keep the instance alive a bit longer.
                Otherwise if weak self is used and the instance is deallocated before this block
                 execute it won’t have self instance to work with
            </p>

            <p>
            For debugging retain cycles a useful tool is a memory exploring or object graph viewer.
             This tool can be used to see a graph of object references.
              Enabling you to visually see retain cycles. 
            </p>

            <p>
            But a quick and easy way if you suspect an object is retained.
             You can set a breakpoint in a class’s deinit function and run 
             through all cases where that class is initialized.
            </p>

            <p>
            One thing you may not know about is adding tests that cover preventing retain cycles
            </p>
            <p>
            You can write a test like
            </p>

            <Image imgSrc={img12}/>
           
            </PageTextContainer>
            <div style = {{height: "90vh"}}></div>
        </PageContainer>
    );
}
}