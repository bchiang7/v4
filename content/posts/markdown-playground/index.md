---
title: Markdown Test File
description: abc234
date: 2019-12-07
draft: true
slug: /pensieve/markdown-playground
tags:
  - Testing
---

![Image Alt](./image.jpg)

```jsx
class FlavorForm extends React.Component { // highlight-line
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // highlight-next-line
    this.setState({value: event.target.value});
  }

  // highlight-start
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  // highlight-end

  render() {
    return (
      { /* highlight-range{1,4-9,12} */ }
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

```javascript:title=highlight.js
// Here is a comment
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined) {
      console.log('undefined');
    }
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export $initHighlight;
```

This is a paragraph.

    This is a paragraph.

# Header 1

## Header 2

    Header 1
    ========

    Header 2
    --------

```css
@import 'compass/reset';

// variables
$colorGreen: #008000;
$colorGreenDark: darken($colorGreen, 10);

@mixin container {
  max-width: 980px;
}

// mixins with parameters
@mixin button($color: green) {
  @if ($color == green) {
    background-color: #008000;
  } @else if ($color == red) {
    background-color: #b22222;
  }
}

button {
  @include button(red);
}

div,
.navbar,
#header,
input[type='input'] {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  width: auto;
  margin: 0 auto;
  display: block;
}

.row-12 > [class*='spans'] {
  border-left: 1px solid #b5c583;
}

// nested definitions
ul {
  width: 100%;
  padding: {
    left: 5px;
    right: 5px;
  }
  li {
    float: left;
    margin-right: 10px;
    .home {
      background: url('http://placehold.it/20') scroll no-repeat 0 0;
    }
  }
}

.banner {
  @extend .container;
}

a {
  color: $colorGreen;
  &:hover {
    color: $colorGreenDark;
  }
  &:visited {
    color: #c458cb;
  }
}

@for $i from 1 through 5 {
  .span#{$i} {
    width: 20px * $i;
  }
}

@mixin mobile {
  @media screen and (max-width: 600px) {
    @content;
  }
}
```

```markdown
# hello world

you can write text [with links](http://example.com) inline or [link references][1].

- one _thing_ has *em*phasis
- two **things** are **bold**

[1]: http://example.com

---

# hello world

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing `i can write code`, and `more` wipee!
```

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Header 1 #
    ## Header 2 ##
    ### Header 3 ###
    #### Header 4 ####
    ##### Header 5 #####
    ###### Header 6 ######

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> ## This is a header
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:
>
>     Markdown.generate();

    > ## This is a header.
    > 1. This is the first list item.
    > 2. This is the second list item.
    >
    > Here's some example code:
    >
    >     Markdown.generate();

- Red
- Green
- Blue

- Red
- Green
- Blue

- Red
- Green
- Blue

```markdown
- Red
- Green
- Blue

* Red
* Green
* Blue

- Red
- Green
- Blue
```

1. Buy flour and salt
2. Mix together with water
3. Bake

```markdown
1. Buy flour and salt
1. Mix together with water
1. Bake
```

Paragraph:

    Code

<!-- -->

    Paragraph:

        Code

---

---

---

---

---

    * * *

    ***

    *****

    - - -

    ---------------------------------------

This is [an example](http://example.com 'Example') link.

[This link](http://example.com) has no title attr.

This is [an example][id] reference-style link.

[id]: http://example.com 'Optional Title'

    This is [an example](http://example.com "Example") link.

    [This link](http://example.com) has no title attr.

    This is [an example] [id] reference-style link.

    [id]: http://example.com "Optional Title"

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

This paragraph has some `code` in it.

    This paragraph has some `code` in it.
