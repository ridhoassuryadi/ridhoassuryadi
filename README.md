#Hello
$$
\begin{aligned}
\text{For } u = f(x), v = g(x) \\
\frac{d}{dx}(u \pm v) &= \frac{du}{dx} \pm \frac{dv}{dx} && \text{Sum/Difference Rule} \\
\frac{d}{dx}(u \cdot v) &= \frac{du}{dx} \cdot v + u \cdot \frac{dv}{dx} && \text{Product Rule} \\
\frac{d}{dx}\left(\frac{u}{v}\right) &= \frac{\frac{du}{dx} \cdot v - u \cdot \frac{dv}{dx}}{v^2} && \text{Quotient Rule}, v \ne 0
\end{aligned}
$$

```mermaid
flowchart TD
intro([Start])
q1{{Yaw Brain, what do you want to do tonight?}}
s1(The same thing we do every night, Pinky. Try to take over the world!)
s2(Nothing)
s3(Plot for world domination)
q2{{Did it work?}}
s4(Victory!)
s5(Nope)
s6(Come, Dude. We must prepare for tomorrow night.)
q3{{What are we going to do tomorrow night, Brain?}}
s7(Resign to my failures)
s8(The same thing we do every night, Pinky. Try to take over the world!)
ending([Ending])

intro-->q1
q1-->s1
q1-->s2
s1-->s3
s3-->q2
q2-->s4
q2-->s5
s5-->s6
s6-->q3
q3-->s7
q3-->s8
s8-->q1
s2-->ending
s4-->ending
s7-->ending
```
