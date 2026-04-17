// pages/explanation.js

import Image from 'next/image';
import Link from 'next/link';

export default function Explanation() {
    return (
      <div className="min-h-screen bg-gray-100 py-8 text-black">
        <div className="max-w-4xl mx-auto space-y-6 px-4">
          {/* Main Content Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-8">
              What's going on?
            </h1>
  
            {/* Back to Game Link */}
            <div className="mb-8">
              <Link
                href="/"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                ← Back to Game
              </Link>
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
                  a famous brain teaser. The best-known version was asked to
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
                  The answer is yes. Switching to the other door doubles your chances of getting the car.
                  Many people find this counterintuitive, and think that switching shouldn't make a difference. Even mathematicians can get tripped up by this problem (vos Savant answered 
                  correctly and <a href="https://web.archive.org/web/20130121183432/http://marilynvossavant.com/game-show-problem/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">got a lot of angry letters disagreeing!</a>) There are a lot of good explanations of the original Monty Hall Problem online: I
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
                  The problem is named for <em>Let's Make a Deal</em> host Monty Hall, though the show didn't really work the way it does in the problem.
                </p>
              </div>
                <p className="text-black mb-4 leading-relaxed">
                  However, the wording of the puzzle doesn't always emphasize a key aspect: the host <strong>knows</strong> where
                  the car is, and will <strong>always</strong> open a door with a goat behind it.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  If the host <em>doesn't</em> know where the car is, and opens one of the other doors at random, <strong>it is not better to switch. <em>Even
                  if he revealed a goat!</em></strong>
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  A lot of people who have heard the original Monty Hall Problem <em>get this wrong.</em> And because the Monty Hall Problem is famously counterintuitive,
                  it's easy to get this version wrong and then double down, thinking that your answer
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
                  when Monty doesn't know where the car is, then if he reveals a goat,
                  there's no advantage to switching. If you don't trust the website, you can try it yourself with some playing cards.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  There are also ways to prove this rigorously, by drawing tree diagrams or writing probability formulas that cover all cases.
                  This website is <em>not</em> about that (yet). I'm going to use as little mathematical terminology as I can. But make no mistake, this strange result <em>is</em> true.
                  What this website is about is trying to explain conceptually, intuitively, how this can be possible.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Because I don't blame anyone for getting confused! Why does it matter if Monty knows where the goats are, if the problem states that he does reveal a goat?
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
                  One cause of confusion is that the problem is usually worded as "the host knows what's behind the doors." But to be fair,
                  we don't quite care about what Monty's "knowledge," his psychological state. The phrase "the host, who knows what's behind the doors, opens a door which has a goat" really means this:
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  <strong>The host never would have opened a door with the car behind it.</strong>
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Or if you prefer, the host <em>cannot</em> open a door with a car behind it. It's just not possible. Maybe he knows where the car is and chooses not to reveal it, maybe he knows nothing but is being fed instructions through an earpiece. 
                  Maybe he's been magically cursed to never reveal a car. The puzzle works either way: the point is, the puzzle relies on the
                  host's <em>predictable behavior,</em> not his knowledge. After all, the host in this simulated version is just a few lines of code - I'm not sure it "knows" anything!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Why does the host's <em>predictable behavior</em> matter? Set the switch to "Monty Doesn't Know" and play or simulate a lot of tries.
                  Whether you switch or stay, about 1/3 of the time, he reveals a goat, and you win. And 1/3 of the time, he reveals a goat and you lose. But also, 1/3 of
                  the time, Monty accidentally reveals the car, ending the game. So when Monty doesn't know,
                  you have an even chance of winning when Monty reveals a goat whether you switch or stay - but there are also these extra cases where Monty reveals the car.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  (You might be bothered by me saying Monty revealing the car "ends the game early": where did I get that rule? But since the puzzle
                  asks about what happens when Monty reveals a goat, it doesn't actually matter what happens if he reveals a car.
                  We could say that means you automatically lose, in which case you have a 1/3 chance of victory no matter your strategy. Or
                  it could count as a win, and you have a 2/3 chance of victory no matter what you do. Or just discard those cases entirely. Regardless, in the cases where Monty reveals a goat,
                  there's no difference in your success rate if you switch or stay.)
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  So when Monty choose randomly, he reveals the car 1/3 of the time: what if we make it so he <em>can't</em> reveal the car? What if (because he knows where the car is, or through a magical curse, or whatever) 
                  he will <em>never</em> open the door with the car behind it?
                </p>
                <p className="text-black mb-4 leading-relaxed">                 
                  Well, when Monty's choosing randomly, he could only reveal the car <em>if</em> the original door you picked has a goat behind it.
                  That would leave him with two doors, one with a car and one with a goat: half the time, he'll reveal a car. The other
                  half of the time, he'll reveal a goat - those are the cases when it's better to switch, because the car is behind the remaining door! If instead, he <em>always</em> reveals the goat, that means that <em>every time</em> you
                  initially choose a goat, it <em>has</em> to become one of those cases when it's better to switch. Because every time you initially choose a goat, he has to open the door with the other goat!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  If Monty doesn't know, 1/3 of the time you should switch, 1/3 of the time you should stay, 1/3 of the time he
                  reveals the car. If he does know, then all the times when he would have revealed the car become times where it's better to switch, yielding the result in the original problem:
                  switching wins 2/3 of the time.
                </p>
                <h3 className="text-xl font-semibold mb-3">
                  It's about information
                </h3>
                <p className="text-black mb-4 leading-relaxed">
                  The above explanation... makes a little sense, maybe? If you're mathematically inclined and love drawing tree diagrams, it might be enough. But I find it unsatisfying - it doesn't tackle
                  the <em>weirdness</em> of this problem. Because it really feels like both situations are the same! You point to a door, Monty reveals a goat,
                  not a car: why should we care about hypotheticals that didn't actually happen? What do I even mean, times turn into
                  different times? The problem tells us what's happened. So why do we care what <em>could have</em> happened, but didn't?
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
                  On the left: what it looks like when Monty deliberately reveals a goat. On the right: what it looks like when Monty
                  accidentally reveals a goat.
                </p>
              </div>
                <p className="text-black mb-4 leading-relaxed">
                  Here's a different way to think about it: you're looking for information. You're like a detective, hunting for clues. And the same object can be a different clue
                  depending on where it came from. If there's a bootprint in the hall, it matters if the victim wore boots or not. If the window was open on the night of the crime, it matters if someone leaves it open every night, 
                  or if it was just open this once. The same event <em>means</em> something different depending on how rare it is - it gives you different information.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  What information is Monty giving us? It might make more sense to think in this way: when he deliberately reveals a goat every time, what information is he <em>hiding?</em> Try to picture
                  exactly what it's like when Monty chooses <em>randomly</em>:
                </p>
                <p className="text-black mb-4 leading-relaxed">                  
                  You've pointed at one of the doors. You don't know where the car is, but you hope you're pointing at it! Monty randomly opens a different door.
                  There's a goat behind it.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  ...Don't you feel better about your choice now? You know that at least you aren't pointing at that goat! You breathe a sigh of relief, because it feels like the probability you're pointing at the car has gone up!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  And it <em>has!</em> A lot of people hear slightly garbled explanations of the original Monty Hall problem, which will say things like: pointing to a door
                  at the start "locks in" a 1/3 probability that the car's behind it. There's a 2/3 probability it's behind one of the other two doors - so when Monty reveals a goat behind one of them, there's a 2/3 chance
                  it's behind the remaining door.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  But probabilities don't inherently "lock in" like that! They absolutely change in response to new information. If you're playing a card game, and you hope your opponent isn't holding an ace,
                  you <em>feel better</em> if you see three aces dealt from the deck onto the table.
                  Even though the aces were dealt after they were already holding their hand, they still give useful information: there's only one ace left, the odds are low that it happens to be among their cards.
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
                  show: <a href="https://en.wikipedia.org/wiki/Deal_or_No_Deal_(American_game_show)" target="_blank" rel="noopener" className="text-blue-600 hover:underline"><em>Deal or No Deal</em></a>. That show has a set of 
                  briefcases containing different amounts of money, ranging from $0.01 to $1,000,000. The contestant chooses 
                  a briefcase, and during the show, more and more of the remaining briefcases are opened, revealing what's inside. When small amounts of money are
                  revealed, contestants sigh with relief! It means that that small amount can't be in the briefcase you're holding. Each case contains a different number of dollars, and every time you reveal a low number, your expected
                  value goes up.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Similarly, when Monty randomly opens a door to reveal a goat, it means you can't be pointing at that goat. It makes it likelier that you're pointing at the car - to
                  be exact, that information raises your probability from 1/3 to 1/2!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  But when Monty is deliberately only revealing goats, he's <em>hiding</em> that information from you. You don't learn
                  anything when he reveals a goat... <em>because you already knew he would reveal a goat!</em>
                </p>
                <p className="text-black mb-4 leading-relaxed">                 
                  Like a window left open, the same event means something different if it was guaranteed or uncertain.
                  If Monty doesn't know where the car is, then if you initially chose the door with the car, he was <em>guaranteed</em> to reveal a goat.
                  But if you chose one of the goats initially, he only had a 1/2 chance of revealing a goat. 
                  That's why if he reveals a goat, it lets you know the chances have gone up that the door you're pointing at has the car.
                </p>
                <p className="text-black mb-4 leading-relaxed">                         
                  But if
                  he's definitely going to reveal a goat no matter what you chose, revealing a goat <em>doesn't tell you anything.</em> There's no sigh of relief, no updating probabilities.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  This is what people mean by the 1/3 probability "locking in." It was 1/3 when you pointed at the door, and Monty revealing a goat deliberately hasn't changed that.
                  The key to the original problem is seeing how we can use Monty's tricks
                  against him. The fact that he <em>hasn't</em> given you more information about your own door teaches you something
                  about the <em>other</em> one: by changing the number of doors available, without changing the
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
                  Sometimes, people try to explain the original Monty Hall problem by extending it to an extreme case: suppose there are a hundred doors.
                  You point to door #23. Monty, who knows where the car is, deliberately opens every door except for #23 and #57, revealing nothing but goats.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  This is very suspicious! It raises an obvious question: <em>why is Monty avoiding door #57?</em> There was only a 1% chance that you were correct when you chose #23 at the start. So it's likely
                  that he's avoiding #57 because opening it would reveal the car. You should switch!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  But if Monty <em>doesn't know where the car is,</em> he <em>can't</em> be deliberately avoiding the car. If he randomly opens 98 doors and doesn't find the car, that is <em>surprising,</em> but not suspicious. (It was an unlikely thing
                  to happen, but unlikely things do happen!) It may make you curious about door #57, but it also
                  makes you feel a lot <em>better</em> about your initial choice. After all, a very plausible reason he hasn't found the car after opening so many doors at random... is that it's been behind
                  the door you chose the whole time! Each door that opens gives you information, which has steadily increased your probability from 1/100 right up to 1/2. 
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  You're in the same situation as a contestant on <em>Deal or No Deal</em> who has eliminated all but one onstage briefcase, and the remaining dollar amounts are $0.01 and $1,000,000. This sort of occurrence is unlikely,
                  but now that it has happened, it's great television: because you have an equal chance to be holding one cent or a million dollars. Each time you eliminated a briefcase that didn't contain the million dollar prize, you increased the probability it was in
                  each of the remaining briefcases onstage, as well as the one in your hands. Now there's only one onstage: there's a 50/50 chance the million dollars are in there, and a 50/50 chance it's in yours. 
                </p>
                <h3 className="text-xl font-semibold mb-3">
                  No, really, it's <em>all</em> about information
                </h3>
                <p className="text-black mb-4 leading-relaxed">
                  Let's get really conceptual. To start, I'm going to say something silly:
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  When you first pick a door, the probability a car is behind it is <em>not</em> 1/3.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Why? Because the door you're pointing to either has a car behind it, or it doesn't. If it does, there's a 100% chance you're pointing at the car. If it doesn't, a 0%
                  chance. You'll never open a door to find a third of a car! The probability must be <em>either 100% or 0%</em>; you just don't know which of those it is (and
                  in the original version of the problem, it's not even like <em>no one</em> knows, Monty does!)
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Hopefully, you're now saying "but... probability doesn't work like that!" But <em>why not?</em> You're either pointing at a car, or pointing at a goat,
                  and there is a real, material difference between those two. 
                  The only reason that you don't take that difference into account when calculating probability is that you don't <em>know</em> which one you've chosen.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  This is a basic fact about probability, that a lot of us learn early on but come to forget:
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  <strong>Probability does not describe reality. It describes our <em>knowledge</em> of reality.</strong>
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Outside of the (fascinating, bizarre) world of quantum mechanics, we use probability is not because it reflects how
                  the world actually works. We use it when we lack complete information as to how the world works.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  And I think a lot of people know this, but most of the time, don't really think about it. Because most probability questions
                  are about situations where no one could plausibly have more information. We assume that when a deck of cards is shuffled, no one
                  could keep track of the location of every card. The skittering
                  of a ball around a roulette wheel is too chaotic for anyone to track. The best prediction anyone could make is that there's an equal chance of every outcome. So we say the probability that
                  the top card on the deck is a the Ace of Clubs is 1/52, even
                  though in reality, that card either is the Ace of Clubs or it isn't.
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
                  and you do not. Or, at least, Monty will act based on information you did not have. And information is so central to the idea of probability that
                  <em>what information Monty uses</em> to make an action affects the probability, even if his action is the same.
                  Revealing a goat deliberately or accidentally is the same action, but from different <em>mechanisms,</em> different sets of rules and information that produce a result.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  In fact, I might put it this way:
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  <strong>Probability is a description of a mechanism.</strong>
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Probability is a way of describing <em>how things work.</em> Saying there's a 1/3 chance of a car behind a door isn't describing where the car is, it's a way of describing <em>the process</em> by which a car was placed behind a door.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  When you say, "There's a 1/3 chance
                  a car is behind that door," you're saying: "I know there are three doors, and that a car is placed behind one of them. 
                  I don't have any reason to think one of the doors is more or less likely than any other. I am taking as a given that there is one car; that it is in fact behind a door, not off in the parking lot;
                  that it isn't split somehow
                  behind multiple doors; that the people backstage aren't moving the car around in response
                  to my guess," and so on. 
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  And <em>that,</em> to me, is the most fundamental reason it matters whether Monty knows. Whether Monty is choosing randomly or choosing a goat
                  every time is part of the <em>mechanism</em> of the game,
                  and the <em>whole point</em> of probability is to describe the mechanism. It's not a description of what has happened,
                  or even what will happen, but of <em>the process by which things happen,</em> and how your knowledge of that process can help you predict future events.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Here's one more way to think about it, with another silly statement:
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  The best strategy in the original Monty Hall Problem is <em>not</em> to switch every time.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Why? Because the best strategy is to just <em>choose the door with the car!</em> You shouldn't switch every time: you should switch if
                  you aren't pointing at the car, and stay if you are pointing at the car. That's way
                  better than a 2/3 chance of victory, that's a 100% chance!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  This isn't <em>impossible.</em> That is, these actions aren't impossible: nothing physically prevents you from always choosing the car door. In fact, if you try the 
                  simulator, you might find yourself achieving a better tahn 2/3 success rate for some time! It's just hard to do this reliably. It's not something you can use
                  as a "strategy" - but only because of your lack of knowledge.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  But it's worth keeping in mind this "better strategy" as you think about what probability <em>means.</em> Suppose you're playing the original Monty Hall Problem: you
                  approach the three doors, and you point at one of them. And let's say, for the sake of argument, you happen to be pointing at the car.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Monty deliberately opens another door to reveal a goat, and you smugly think to yourself, "Aha, this is the classic Monty Hall Problem, and
                  because I understand how the math works, I know that I should switch." But
                  you're <em>wrong.</em> You <em>shouldn't switch,</em> not this time. "Always switch" is <em>not</em> the best strategy, it's just the best strategy <em>you can do.</em> It's
                  only because of your lack of knowledge that you're reasoning using probabilities. In the real world, there are plenty of times you shouldn't switch: you just don't know when those times are.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  As silly as all this may sound, this is what helped me really understand what's going on here. It feels weird that the exact same actions
                  could lead to a 1/3 probability in one situation and a 1/2 probability in another. It feels like it breaks the laws of physics somehow: the same actions
                  are supposed to lead to the same state, right? But <em>probabilities are not physical realities.</em> There is not 1/3 of a car behind that door or 1/2: there
                  either is a car or there isn't. With any given attempt at the game, you're either pointing at the car or you're not. Probability is
                  just a way of describing what you know, what clues you have as to
                  what you might be pointing at. And if one of the things you know is that Monty knows, it changes the probability.
                </p>
                <h3 className="text-xl font-semibold mb-3">
                  Why is this interesting?
                </h3>
                <p className="text-black mb-4 leading-relaxed">
                  Well! Clearly, I find probability interesting in general. But I like this particular puzzle because <em>it's something smart people get wrong.</em> Or at least, it's something
                  people only got wrong if they've seen the original Monty Hall problem.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Because once you start playing with the simulation, there's a moment when the realization hits you like a ton of bricks. <em>Of course</em> it doesn't make a difference if you 
                  switch. <em>This is the intuitive case!</em> This is the whole reason the <em>original</em> Monty Hall problem is confusing, because if you're not paying close attention to its wording, <em>this</em> is the situation
                  you're picturing. There's no difference if you switch, for all the reasons people intuitively felt like it couldn't make a difference when someone told you the original problem.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  And I think there's a really interesting lesson in that! I'd put it this way: a smart person knows that intuition isn't always reliable. But it's very easy to know this and <em>use intuition anyway</em>—you just swap out
                  your first intuition for a new one. When someone has learned the Monty Hall problem, but thinks it's still better to switch if Monty doesn't know, they're still "trusting their gut," they've just
                  updated their gut feeling with the sense that problems like this have a trick, and they should remember that it's better to switch even if it doesn't seem like it.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  So the lesson is, you have to use logic, <em>real</em> logic, break a problem down to its components before leaping to a solution. There's no list of cognitive
                  fallacies you can memorize that will make you rational. Some things in life are intuitive, some are counter-intuitive, and
                  there's no detectable difference between the two before you break the problems down and look at them logically. The lesson of the Monty Hall problem shouldn't just be that "probability is tricky," it should be
                  a reminder that <em>anything</em> can be tricky, and even if you think you know the tricks, you can get tricked again. There is <em>no</em> substitute for actually doing the math, running the simulation, approaching the problem
                  with fresh eyes and trusting none of your guesses.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  That's one reason I find this puzzle interesting. But the other reason I like it is... again, just how <em>weird</em> it is!
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  It's so fun to see a situation where the exact same physical actions take place, but the outcome is somehow different! I think that's another reason analytically-minded people get tripped up. It feels
                  almost <em>mystical</em> to say "it matters whether Monty knows." It's like saying a watched pot never boils, or that the secret ingredient in Grandma's cookies is love. We're very used to the idea
                  that the physical world is all that matters, and that to be rational means understanding that the same set of physical events will lead to the same outcome, every time. It doesn't matter if Grandma baked
                  the cookies with love or not: if they're made with flour, butter, sugar, and eggs, they'll come out exactly the same regardless.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  But this problem creates a real set of scenarios where the exact same physical event, opening a door to reveal a goat, means something different. Your optimal strategy for the future is different.
                  It isn't mystical, it just shows that from a <em>human</em> perspective,
                  stuff like knowledge and intentionality can matter: <em>mathematically</em>. There is a <em>real</em> difference between Monty opening the door to reveal a goat deliberately or accidentally. And
                  this might sound odd, but I mean it: that difference really is akin to
                  the difference between a work of art made by an artist, and a perfect replica, down to the brushstroke, painted by a machine. It's the difference between doing something because you care about someone, or
                  because you think it's expected of you. It's the difference between saying something because you mean it or because you were told to. 
                  It's hard to talk about these differences, and easy to frame discussions of them as irrational. But these differences are <em>real</em>, and understanding them is important.
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  Here's one final set of questions for you:</p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                    <p>
                    Suppose you’re on a game show, and you’re given the choice of three doors. 
                    Behind one door is a car, behind the others, goats. You pick a door, and the host, 
                    who knows what’s behind the doors, says "Now I'll go open a door with a goat behind it." However, on his way across the stage, he trips, stumbling wildly, and knocks open
                    one of the doors by accident, revealing a goat. "Whew!" he says, dusting himself off. "That was a little embarrassing, but it worked out fine: like I said, I was going to
                    reveal a goat anyway."
                    </p>
                  </div> 
                <p className="text-black mb-4 leading-relaxed">
                  Should you switch doors? Or stay with your original choice?
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  What about one more?
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                    <p>
                    Suppose you’re on a game show, and you’re given the choice of three doors. 
                    Behind one door is a car, behind the others, goats. You pick a door, and the host, 
                    who knows what’s behind the doors, says "Now I'll go open a door with a goat behind it." However, on his way across the stage, he trips, stumbling wildly, and knocks open
                    one of the doors by accident, revealing a goat. "Whew!" he says, dusting himself off. "That was a little embarrassing, but it worked out fine: I was going to open that door to
                    reveal a goat anyway."
                    </p>
                  </div>
                <p className="text-black mb-4 leading-relaxed">
                  Should you switch, or stay?
                </p>
                <p className="text-black mb-4 leading-relaxed">
                  How sure are you?
                </p>
              </section>

            </div>
  
            {/* Footer with Back to Game Link */}
            <div className="mt-12 pt-6 border-t">
              <Link
                href="/"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                ← Back to Game
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
