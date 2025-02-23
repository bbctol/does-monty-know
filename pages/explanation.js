// pages/explanation.js

import Image from 'next/image';

export default function Explanation() {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto space-y-6 px-4">
          {/* Main Content Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-8">
              What's going on?
            </h1>
  
            {/* Back to Game Link */}
            <div className="mb-8">
              <a 
                href="/" 
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                ← Back to Game
              </a>
            </div>
  
            {/* Content Sections */}
            <div className="space-y-8">
              {/* Section Example 1 */}
              <section>
                <h2 className="text-3xl font-semibold mb-4">
                  The Monty Hall Problem
                </h2>
                <p className="text-black mb-4 leading-relaxed">
                  This website is about the <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Monty Hall Problem</a>, 
                  a famous brain teaser. The best-known version of the problem was asked to
                  columnist Marilyn vos Savant in 1990:</p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                    <p>
                    Suppose you’re on a game show, and you’re given the choice of three doors. 
                    Behind one door is a car, behind the others, goats. You pick a door, say #1, and the host, 
                    who knows what’s behind the doors, opens another door, say #3, which has a goat. 
                    He says to you, "Do you want to pick door #2?" Is it to your advantage to switch your choice of doors?
                    </p>
                  </div> 
                <p className="text-black mb-4 leading-relaxed">
                  The answer is yes: switching to the other door doubles your chances of getting the car.
                  Most people find this result counterintuitive, and think that switching shouldn't make a difference. Even mathematicians get tripped up by this problem (vos Savant answered 
                  correctly and <a href="https://web.archive.org/web/20130121183432/http://marilynvossavant.com/game-show-problem/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">got a lot of angry letters disagreeing!</a>) But it's true that you should switch, and there are many good explanations for this online: I
                  like <a href="https://www.youtube.com/watch?v=7u6kFlWZOWg" target="_blank" rel="noopener" className="text-blue-600 hover:underline">this one</a> from Numberphile.
                </p>
                <div className="my-8 relative">
                <Image
                 src="/images/MontyHallDoors.jpg"
                  alt="Let's Make a Deal set with three doors"
                 width={800}  // specify the width
                 height={400} // specify the height
                  className="rounded-lg shadow-md"
                />
                <p className="text-center text-gray-600 mt-2 text-sm">
                  The problem is named for <em>Let's Make a Deal</em> host Monty Hall, though the game described in the problem was never exactly played on the show.
                </p>
              </div>
                <p className="text-black mb-4 leading-relaxed">
                  However, the wording of the puzzle usually doesn't emphasize a key aspect: the host <strong>knows</strong> where
                  the car is, and will <strong>always</strong> open a door with a goat behind it.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  If the host <em>doesn't</em> know where the car is, and opens one of the doors randomly, <strong>it is <em>not</em> better to switch.</strong> You
                  have the same chance of finding the car whether you switch or stay. 
                  Notably, this is true <em>even if the host revealed a goat!</em>
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  A lot of people who mostly understand the original Monty Hall Problem <em>get this wrong.</em> And because the Monty Hall Problem is so famously counterintuitive,
                  it's easy to get this modified version wrong, and then double down, insisting to yourself your answer
                  only seems wrong because the puzzle is so tricky.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  But it's true: If Monty randomly opens a door with a goat behind it,
                  there's no reason to switch. If Monty deliberately opens a door with a goat behind it, you should switch. <strong>It makes a difference whether Monty knows.</strong>
                </p>
              </section>
  
              {/* Section Example 2 */}
              <section>
                <h2 className="text-3xl font-semibold mb-4">
                  Why is this true?
                </h2>
                <p className="text-black mb-4 leading-relaxed">
                  Understanding why is a lot easier once you've demonstrated to yourself that it <em>is</em> true. So if you have doubts,
                  on the <a href="/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">main page</a> you can play the game
                  both ways. (Keep in mind that if Monty doesn't know where the car is,
                  he might accidentally reveal it, ending the game early!) Try or simulate it as many times as you like:
                  when Monty doesn't know where the car is, then even in cases where he reveals a goat,
                  there's no advantage to switching.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  There are also ways to prove this rigorously, by drawing tree diagrams or writing probability formulas that cover all cases.
                  This page is <em>not</em> about that. I am <em>not</em> here to prove this result, and I'm going to use math terms as little possible. 
                  This page is trying to explain conceptually, intuitively, how this can be possible.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Because I don't blame anyone for getting confused! Why does it matter whether Monty deliberately or randomly reveals a goat?
                  Math doesn't care about "beliefs" or "intentions," right? If Monty does the
                  same thing in both situations, how can it make a difference <em>why</em> he does it?
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Here are some ways to think about it:
                </p>
                <h3 className="text-xl font-semibold mb-3">
                  Monty's behavior is forced
                </h3>
                <p className="text-black mb-4 leading-relaxed">
                  One cause of confusion (deliberately echoed by this site!) is that the problem usually just says the host "knows what's behind the doors."
                  But to be fair, we don't actually care about Monty's psychological state. The phrase "the host, who knows what's behind the doors, opens a door which has a goat" really means this:
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  <strong>The host will never open the door with the car behind it.</strong>
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  The Monty Hall Problem works no matter why that is. Maybe the host is being fed instructions through an earpiece. 
                  Maybe he's been cursed, and his hand is magically compelled to never go near the car door. Maybe he has really, really accurate intuition. The point is, the puzzle relies on the
                  host's <em>predictable behavior,</em> not his knowledge. After all, the host in this simulated version is just a few lines of code - I'm not sure it "knows" anything!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Why does the host's <em>behavior</em> matter? If you simulate a lot of trials where "Monty doesn't know" (that is, where he opens a door at random) you'll notice that about 1/3 of
                  the time, when he opens a door after your initial guess, he just reveals the car and ends the game.
                  And whether your strategy is to switch or stay, about 1/3 of the time he reveals a goat and you win, and 1/3 of the time he reveals a goat and you lose. So no matter your strategy,
                  you have an even chance of winning in cases where Monty reveals a goat - but there are also these extra cases where Monty reveals the car.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  What if Monty <em>can't</em> reveal a car? What if (because he knows where the car is, or through divine intervention, or whatever) 
                  he will <em>never</em> open the door with the car behind it? Well, the randomly-choosing Monty can only reveal the car if the original door you picked has a goat behind it.
                  Then he's faced with two doors, one with a car and one with a goat, and half the time, he'll reveal the car. The other
                  half of the time, he'll reveal a goat - so in those cases, the car is behind the other door, meaning it's better to switch. If instead, he <em>always</em> reveals the goat, that means that <em>every time</em> you
                  point to a goat initially, he has to reveal a goat and leave the car behind the other door: creating more situations where it's better to switch!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  So, if you're drawing a tree diagram, you could think of it this way: if Monty doesn't know, in 1/3 of branches of the tree he
                  reveals the car. If he does know, then those 1/3 of cases instead are forced to become cases where it's better to switch, yielding the result in the original problem:
                  if you switch, you win 2/3 of the time.
                </p>
                <h3 className="text-xl font-semibold mb-3">
                  It's about information
                </h3>
                <p className="text-black mb-4 leading-relaxed">
                  The above explanation... kind of makes sense? If you're mathematically inclined and love drawing tree diagrams, it might be enough. But I find it unsatisfying - it doesn't tackle
                  the <em>weirdness</em> of this problem. Because it really feels like both situations are the same! You point to a door, Monty reveals a goat,
                  you get to switch or stay: why should we care about hypothetical branches on trees that didn't actually happen? What do I even mean, a branch becomes a different
                  kind of branch? We know what branch we're on: the problem tells us
                  that he revealed a goat. All our reasoning is conditional on that happening. So why do we care what else <em>could</em> have happened?
                </p>
                <div className="my-8 relative">
                <Image
                 src="/images/twodoors.png"
                  alt="Two Monty Hall Problems"
                 width={800}  // specify the width
                 height={400} // specify the height
                  className="rounded-lg shadow-md"
                />
                <p className="text-center text-gray-600 mt-2 text-sm">
                  On the left: what it looks like when Monty reveals a goat deliberately. On the right: what it looks like when Monty
                  reveals a goat accidentally.
                </p>
              </div>
                <p className="text-black mb-4 leading-relaxed">
                  Here's a different way to think about it: you're looking for information. You're like a detective, hunting for clues. And the exact same object can be a different clue
                  depending on where it came from. The window was open on the night of the robbery: it matters if someone leaves it open every night, 
                  or if it was just opened this once. The same open window <em>means</em> something different depending on how rare it is; it gives you different information.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  So, what information is Monty giving us? When Monty is deliberate, it might make more sense to think about what information he's <em>hiding.</em> Try to picture
                  exactly what it's like when Monty chooses randomly. You don't know which door the car is behind. You've pointed at one of them. Monty opens a different random door.
                  There's a goat behind it.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  ...Don't you feel better now? You know you aren't pointing at that goat! You breathe a sigh of relief, because it feels like the probability you're pointing at a car has gone up!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  And it <em>has</em>! A lot of people hear slightly garbled explanations of the original Monty Hall problem, which will say things like: pointing to a door
                  at the start "locks in" a 1/3 probability that the car's behind it. There's a 2/3 probability it's behind one of the other two doors - so when Monty reveals a goat behind one of them, there's a 2/3 chance
                  it's behind the remaining door.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  But probabilities don't inherently "lock in" like that! They absolutely change in response to new information. If you're playing a card game, and you hope your opponent isn't holding an ace,
                  you feel better if you see three aces dealt randomly onto the table.
                  Even though the face-up aces were dealt after their hand, they still give useful information: there's only one ace left, so the odds are low that it
                  happens to be in their hand.
                </p>
                <div className="my-8 relative">
                <Image
                 src="/images/dealornodeal.jpeg"
                  alt="Deal or No Deal briefcases"
                 width={800}  // specify the width
                 height={400} // specify the height
                  className="rounded-lg shadow-md"
                />
              </div>
                <p className="text-black mb-4 leading-relaxed">
                  When Monty doesn't know, the puzzle is kind of like a different game
                  show: <a href="https://en.wikipedia.org/wiki/Deal_or_No_Deal_(American_game_show)" target="_blank" rel="noopener" className="text-blue-600 hover:underline"><em>Deal or No Deal</em></a>. That has a set of 
                  briefcases containing an array of different amounts of money, between $0.01 and $1,000,000. The contestant picks 
                  one, and as the show goes on, randomly opens others to reveal what's inside: when low dollar amounts are
                  revealed, the contestants sigh with relief! Each case contains a different number of dollars, and every time you reveal a low number, it means that can't be the number in your case. Your expected
                  value goes up.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Similarly, when Monty randomly opens a door to reveal a goat, it means you can't be pointing at that goat, and that makes it likelier that you're pointing at the car. To
                  be exact, your probability goes up from 1/3 to 1/2!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  But when Monty is deliberately opening only doors with goats behind them, he's <em>hiding</em> that information from you. Why don't
                  you learn anything from him revealing a goat? Because you already knew he was going to reveal a goat!
                </p>
                <p className="text-black mb-4 leading-relaxed">                 
                  Like the window left open on the night of the robbery, the same event has a different meaning if it was definitely going to happen, or if there was just a possibility.
                  If Monty doesn't know where the car is, then he's guaranteed to reveal a goat if you initially chose the door with the car.
                  But if you chose one of the goats, then he only had a 1/2 chance of revealing a goat. 
                  That's why him revealing a goat lets you know it's more likely you chose at the car.
                </p>
                <p className="text-black mb-4 leading-relaxed">                         
                  But if
                  he's guaranteed to reveal a goat no matter what you chose, it doesn't tell you anything. There's no sigh of relief. It's
                  like he went through the deck and carefully pulled three aces: who cares? Whether there's three aces or four remaining in the deck, anyone can deliberately pull three acess.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  This is what, in a sense, "locks in" the 1/3 probability. It was 1/3 when you pointed at the door, and Monty hasn't
                  done anything to change that. But although it's a bit counterintuitive to see how, we can use Monty's tricks
                  against him. The fact that he <em>hasn't</em> given you more information about your own door teaches you something
                  about the other one: by changing the number of doors available, without changing the
                  probability that your own door is correct, he's increased the probability for the other door.
                </p>
                <div className="my-8 relative">
                <Image
                 src="/images/100doors.png"
                  alt="100 doors"
                 width={800}  // specify the width
                 height={400} // specify the height
                  className="rounded-lg shadow-md"
                />
                </div>
                <p className="text-black mb-4 leading-relaxed">                  
                  A common way of explaining the original Monty Hall problem is to extend it to an extreme case: imagine there are a hundred doors.
                  You point to door #23. Slowly, deliberately, Monty opens every door except for #23 and #57, revealing a goat behind each one.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  This raises an obvious question: <em>why is Monty avoiding door #57?</em> That's very suspicious! There's only a 1% chance that you were correct when you chose #23 at the start. So it's likely
                  that he's avoiding #57 because opening it would reveal the car: you should switch!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  But if Monty <em>doesn't know where the car is</em>, he can't be deliberately avoiding it! If he opens 98 doors and doesn't find the car, that's
                  unlikely, maybe a bit surprising, but assuming you can trust that he doesn't know where the car is, it isn't not suspicious. In fact, opening all those doors without revealing the
                  car makes you feel a lot <em>better</em> about your initial choice - a very plausible reason he hasn't found the car is that it's been behind
                  your door the whole time! Each door that opens gives you information, and that information has steadily increased your probability from 1/100 right up to 1/2. 
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  You're in the same situation as a contestant on <em>Deal or No Deal</em> who eliminates all but one briefcase onstage, and the remaining dollar amounts are $0.01 and $1,000,000. This is an unlikely
                  occurrence, sure - but now that it's happened, it makes for great television. Each time you eliminated a briefcase that didn't contain the million dollar prize, you increased the probability it was in
                  of the remaining briefcases onstage, or the one in your hands. Now there's only one onsteage: there's a 50/50 chance the million dollars are in that one, or in yours. 
                </p>
                <h3 className="text-xl font-semibold mb-3">
                  No, really, it's <em>all</em> about information
                </h3>
                <p className="text-black mb-4 leading-relaxed">
                  Okay, let's get really conceptual. To start, I'm going to say something silly:
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  When you first pick a door, the probability a car is behind it is <em>not</em> 1/3.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Why? Because the door you're pointing to either has a car behind it, or it doesn't. If it does, there's a 100% chance you're pointing at the car. If it doesn't, a 0%
                  chance. So obbiously, it must be one of those values - "1/3" doesn't come into it! Sure, you don't know which of those it is, but one of them is true (and
                  in the original version of the problem, it's not even like <em>no one</em> knows; Monty does!)
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Hopefully, you're now saying "but... probability doesn't work like that!" But <em>why not?</em> You're either pointing at a car, or pointing at a goat,
                  and there is a real, material difference between those two. 
                  The only reason that you don't take that difference into account when calculating probability is that you don't <em>know</em> which one you're pointing at.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  This is a basic fact about probability, that a lot of us learn early on but come to forget:
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  <strong>Probability does not describe reality. It describes our <em>knowledge</em> of reality.</strong>
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Outside of the (fascinating, bizarre) world of quantum mechanics, we use probability is not because it reflects how
                  the world actually works at a deep, physical level: we use it when we lack complete information.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  And I think a lot of people nominally know this, but its importance doesn't register most of the time. Because most probability questions
                  are about situations where there's no one could plausibly get more information. The skittering
                  of a ball around a roulette wheel is too chaotic for anyone to track: the best prediction anyone could make is that it has an equal chance
                  of landing on any number.
                </p>
                <div className="my-8 relative">
                <Image
                 src="/images/roulettewheel.jpg"
                  alt="A roulette wheel"
                 width={800}  // specify the width
                 height={400} // specify the height
                  className="rounded-lg shadow-md"
                />
              </div>
                <p className="text-black mb-4 leading-relaxed">
                  If there's one fundamental reason the Monty Hall Problem causes so much confusion, it's that it <em>isn't that kind of situation.</em> Monty knows
                  and you do not. Or, at least, Monty will act based on information you did not have. And information is so central to the idea of probability
                  that even if Monty does the exact same thing in both situations, the resulting probability will change depending on what information he used.
                  It's the same action, but it comes from a different <em>mechanism,</em> a different set of rules and interactions that produce a result.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  In fact, I might put it this way:
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  <strong>Probability is a description of a mechanism.</strong>
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Probability is a way of describing <em>how things work,</em> not how things are. It does not say what's behind
                  your door! You will never open a door
                  to find 1/3 of a car. Probability is a way of describing <em>the process by which something came to be behind your door.</em>
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  When you say, "There's a 1/3 chance
                  a car is behind that door," you're saying: "I there are three doors, and that someone got one car and placed it behind one of those doors, 
                  but I don't have any way of knowing which door. I do know, or at least am assuming, that it is behind a door, not off in the parking lot,
                  that there's only one, that it isn't split somehow
                  behind multiple doors, that the people backstage aren't moving the car around in response
                  to my guess," and so on. 
                  Probability is not about what's actually true, not about where the car actually is;
                  it's about what you know or are assuming to be true about the way a situation came to be, and what that tells you
                  about what might happen next.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  And <em>that,</em> to me, is the most fundamental reason it matters whether Monty knows. Monty's knowledge is part of the mechanism,
                  and the <em>whole point</em> of probability is to describe the mechanism. He does the same actions, but probability isn't about the actions - not
                  about what has happened, or even what will happen, but about the process by which things happen.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  I'm not sure this all will make sense to others! But it's what helped me understand this problem. Because I was confused by this too! I didn't get it 
                  right at first, and even after I had drawn some probability trees, I made this simulation because I doubted what they showed me. I struggled with
                  how these situations could possibly be different. The way I saw it, if Monty doesn't know where the car is, then he reveals a goat while in some hypothetical universes he may have 
                  revealed a car. If he does know, he reveals a goat while in all hypothetical universes he would reveal a goat. Why does it matter what <em>doesn't</em> happen?
                  Who cares about how many hypothetical branches we didn't end up going down?
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  But probability is <em>all about</em> made-up, fake, hypothetical universes. You say things like "a 1/3 chance of pointing at the car" even though in the real world,
                  you're either pointing at a car or you're not: you made up
                  three fake worlds, with a car behind each door, to express the extent of your knowledge about how the car got to wherever it is. Counting the number
                  of those hypothetical universes is the whole point, even though <em>none of them</em> truly exist.

                  Like I said, the point of this site isn't to prove that what Monty knows matters, but help convey how this is possible.
                  For me, at least, this is what does it.
                </p>
              </section>
            </div>
  
            {/* Footer with Back to Game Link */}
            <div className="mt-12 pt-6 border-t">
              <a 
                href="/" 
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                ← Back to Game
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }