import React from 'react';

const Blog = () => {
    return (
        <section className="bg-black dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400"></p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the different ways to manage a state in a React application?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.</p>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            {/* <span className='font-semibold text-green-500'>There are five practical differences between SQL and NoSQL:</span> */}
                            {/* <br /> */}
                            <ul>
                                <li>1. URL</li>
                                <li>2. Web Storage</li>
                                <li>3. Local State</li>
                                <li>4. Lifted State</li>
                                <li>5. Derived State</li>
                                <li>6. Others</li>
                            </ul>
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does prototypical inheritance work?</summary>
                        
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> What is a unit test? Why should we write unit tests?</summary>
                        
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">React vs. Angular vs. Vue?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;