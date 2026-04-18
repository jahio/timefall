# Timefall: Data-Driven, Dynamically-Rendered Timeline

1. Given a properly formatted YAML, JSON or TOML file, pop it in the paste box, and;
1. The front-end fetches it (assuming no CORS issues) and renders a vertically-scrollable, interactive timeline in the browser.

Doesn't matter what order the items appear in the data, so long as they have valid date and time strings according to the format prescribed.

**NOTE:** The entries themselves need a singular date at the "event" level, or each event must have one or more actions, each of which must have
a date assigned to the action. It can optionally have a time if the time is known (must have valid time zone suffix, only modern day time zones are
supported). When there's only a date at the event level, that one date will show. When there are multiple actions with dates, it will render the first
date and the last. For example, given two actions on 18 and 19 April in 1775 (battles of Lexington and Concord), you'd see "April 18-19, 1775".

Status: vaporware

## Useful development tools

1. [yamlfmt](https://github.com/google/yamlfmt) (`brew install yamlfmt`)

## Data Format

This readme may deviate from what's actually possible as development progresses; see the project's own public/sample.yaml for an up to date example.

```yaml
title: "A Timeline Title Here"
intro: |
  Place a multi-paragraph (if you like)...

  ...introduction of any length here.
events:
  - title: "The Battles of Lexington and Concord"
    description: "The first battles of the American Revolutionary War"
    body: |
      A multi-paragraph body could go here describing the event
    references:
      - title: "Paul Revere's Ride"
        citation: "Book by David Hacket Fischer, Chapter 1"
      - title: "The Battles of Lexington and Concord"
        citation: "https://www.britannica.com/event/Battles-of-Lexington-and-Concord"
      - title: "The Glorious Cause: The American Revolution, 1763-1789"
        citation: "Book by Robert Middlekauff, Chapter 6"
    actions:
      - title: "The British Search, Revere and Dawes Ride"
        date: "1775-04-18"
        time: "21:00:00 EDT" # Approximation adjusted for current time zone offsets/measurements
        body: |
          In the very late night hours of April 18, 1775, British troops were ordered to march from Boston to
          Concord to seize munitions (gunpowder, artilery pieces, shot, etc.) that they considered stolen property
          belonging to their military (where else do civilians under a military occupation get such things?). Their
          orders also included the arrest of rebel leaders, including Samuel Adams and John Hancock. Thanks to a very
          well-organized network of spies and informants, the colonists were well aware of the British plans in advance,
          allowing both Adams and Hancock to escape capture, as well as giving rebel forces time to both hide their
          stockpiled munitions and to execute established procedures for the mobilization of local militia.
      - title: "The First Shots of the Revolution are Fired"
        date: "1775-04-19"
        time: "05:00:00 EDT" # Approximation
        body: |
          Longer explanation, multiparagraph capable.

          Thanks to the warnings of Paul Revere and William Dawes, local militia rapidly assembled at Lexington in the very
          early morning hours of April 19, 1775. The British troops, under the command of Lieutenant Colonel Francis Smith,
          were ordered to seize the colonial militia's military supplies and arrest John Hancock and Sam Adams. The British
          arrived at Lexington around 5AM, where they were met by a small group of militiamen, who were ordered immediately
          to disperse. Naturally, they refused to comply.

          To this day no one knows who fired the first shot; it's generally thought the first, unknown shot was an accident,
          a misfire due to the exceptionally high stress of the moment. Whatever the cause and whomever pulled the trigger,
          what happened next _is_ a matter of known, historical fact: British troops, obviously thinking they were under attack,
          understandably **returned fire**, killing 8 colonial militia and wounding 10 others, affecting a fairly quick colonial
          retreat at Lexington. The British were then free to move on to Concord.

          At Concord, the British were met by a large group of militiamen and forced to retreat all the way back to
          Boston, suffering 273 casualties along the way. Colonial militia, by contrast, lost only 95 in total, a nearly 3-to-1
          ratio.
  # End of Lexington / Concord entry
  - title: "Battle of Bunker Hill"
    description: "A pyhrric victory for the British"
    body: |
      ...
    actions:
      - title: "Fortification of Breed's Hill"
        date: "1775-06-16"
        description: "Colonial Forces Preemptively Occupy Breed's Hill"
        body: |
          ...
      - title: "Battle of Bunker Hill"
        date: "1775-06-17"
        description: "Gen. Howe joins British troops in combat; British dead lie 'thick as sheep in a fold'"
        body: |
          ...
      - title: "Dr. Joseph Warren Killed at Bunker Hill"
        date: "1775-06-17"
        description: "Dr. Joseph Warren, a major early figure in the Revolutionary cause, is killed at Bunker Hill"
        body: |
          ...
  # End of Bunker Hill Entry
```