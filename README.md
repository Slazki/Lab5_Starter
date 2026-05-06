# Lab 5 - Starter

## Logistics

Name: Fahad Majidi

Lab Partner(s): None

## GitHub Pages

Expose: https://slazki.github.io/Lab5_Starter/expose.html

Explore: https://slazki.github.io/Lab5_Starter/explore.html

## Check your understanding
1.)Not really, at least not by itself. Sending a message involves the UI, network, server, and delivery, which a unit test can’t fully cover. You’d either mock too much or test too little. It’s better handled with integration or end-to-end tests. Unit tests are still useful for smaller pieces like validation, payload creation, or formatting functions.

2.)Yes — this is a perfect unit test case. A max-length check is just a pure function: input a string, output whether it’s valid (or how to trim it). No async, no UI, no network. You can quickly test edge cases like 80 vs 81 characters, empty strings, and emojis (since they can span multiple code units). It’s simple, deterministic, and easy to protect against regressions.


Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

