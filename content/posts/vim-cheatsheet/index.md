---
title: Vim quickies/ cheatsheet
description:
date: '2019-11-24'
draft: false
slug: '/pensieve/vim-cheatsheet'
tags:
  - Vim
  - Editor
  - Linux
---

![Draft fail](https://www.ubuntupit.com/wp-content/uploads/2019/03/Vim-Commands.jpg)

## Generally helpful stuff

    Open a file for editing             :e path/to/file.txt
    Return to Normal mode               ESC   or <CTRL>+C

## Navigating around text

You have to be in Normal mode. Use ESC to get out of Visual, Replace, or Insert mode.

    (left)                       h
    (down)                       j
    (up)                         k
    (right)                      l
    next word                    e
    Jump to the first line       gg
    Jump to the last line        G

## Entering Text

    Insert text before cursor               i
    Insert text after cursor                a

## Working with multiple files

    Open a file in a horizontal split   :sp path/to/file.txt
    Open a file in a vertical split     :vsp path/to/file.txt
    Move to a split window page         <CTRL>+w and a direction key (h, j, k, or l)
    Move to next window pane            <CTRL>w w
    Make selected pane bigger           CTRL>w +  (yes, you need the shift key for the plus)
    Make selected pane smaller          <CTRL>w -

## Searching

    Search for a word                           /<word>
    Go to next match                            n
    Find and replace on line                    :s/<find>/<replace>
    Find and replace globally                   :%s/<find>/<replace>//gc
    Go to first quote, replace text in quotes:  ci"

## Manipulating text

    cut the current line                dd
    copy the current line               yy
    paste below current line            p
    paste above current line            P
    Remove the character under cursor   x
    Remove the character before cursor  X
    Delete the word under cursor        de
    Delete to the end of the line       d$

    Remove five lines starting here     5dd
    Copy five lines starting here       5yy

    indent this line                    >>
    indent five lines starting here     5>>

    Replace mode (overtype)             r

## Visual Advanced selection

    Visual mode                         v
    Visual Line mode                    V
    Visual Block mode                   <CTRL>v

## Working with NERDTree

    Open the NERDTree                   :NERDTree
    Toggle the NERDTree on and off      :NERDTreeToggle
    Open selected file                  <ENTER>
    Open selected file in horiz. split  i
    Open selected file in vert. split   v
    File menu                           m
    Help                                ?

## Commands:

    Run a command                           :!<command>
    Open a shell                            :sh

For interactive tutorial, try openvim.com

Follow me on Github: www.github.com/rubiin
