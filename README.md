#TypeScript design patterns :

Description:

ADAPTER:
- this pattern is allowing to implement one class's interface method to another without changing them. instead of it we are creating new class than implements addon interface , and in this case tracking the device to give it another devices method. 

DECORATOR:
- by creating abstract Car class component, we are able to add concrete model car components with personalize methods.
- abstract class extension - decorator is awesome feature now and we can use it to create ours concrete component decorators like for example autopilot enchancement in modern cars.

FACADE:
- creating classes for each of our devices menagment control, then initializing facade class, where we are accessing those control methods is the best way to easily automatize some processes and it even gives us right to preparing custom sequences of its course.
- in this case we are automatizing night programming session.
- nice explication would be implement it with node.js raspberryPi voltage controll app.

OBSERVER:
- subject and observer interfaces - in this case we are creating WeatherStation subject and water tank fill observers - to detect preassure level and other one to initialize tank refilling, each of them are notifying the Subject.

STATE:
- with this one

Installation:

-$ tsc <pattern.ts> $ node <pattern.js>

Usage:

Easily addaptive code

Contributing:

You and your ideas are more than welcome here! You can grab issues, or just fork It and show me the results of your imagination.

Adam Tomaś

License: GNU GPLv3
