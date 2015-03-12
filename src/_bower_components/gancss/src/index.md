

# Introduction

The purpose of this guide is to provide a solid foundation for maintaining
a consistent visual style and a high quality code base across all of our sites.
This page – The Overview – is where we keep our rules and guidelines for
writing clean and effective CSS. The other pages – Base, Layout, Modules
and Tools - is our pattern library divided into different sections.

      WHAT WE'LL COVER:

    - Quick Facts
    - Preprocessing
    - Prefixing
    - Folder Architecture
    - File Layout
    - Usage
    - Documentation
    - Improvements

A quick note on browser support. We aim to target the last 2 versions of popular
browsers. At the time of writing, that means IE 10 & IE 11. Other target browsers
automatically update which makes them a non-issue.

# Quick Facts

<ul class="with-bullet">
    <li>`SCSS` is our preprocessor of choice.</li>
    <li>We only serve one file in production.</li>
    <li>Our source files consist of around 30 files.</li>
    <li>We have around 2300 lines of css.</li>
    <li>It weights in at 23kb.</li>
    <li>We use `normalize.css` to even the playing field.</li>
</ul>

# Folder Architecture

The folder structure is inspired by SMACCS approach to CSS. We do our best to keep each file short and sweet in order to improve readability and organization.

    src/scss/
    |-- gancss.scss
    |-- base/
    |-- layout/
    |-- modules/
    |-- tools/

- `gancss.sccs` – This is where we import all of our files.
- `base` – Here lives the element selectors such as forms, tables and typography.
- `layout` – This folder contains major layout sections such as header, footer and grid.
- `modules` – This is where we keep all our reusable chunks of code such as buttons and alerts.
- `tools` – This folder holds our helper classes, mixins and our global settings.

# File Layout

We love organization and consistency, so we structure each file according to a set of rules.
This is a simple example showing how every file should look:

    //
    // TYPOGRAPHY
    //


    // # Block elements
    // # Inline elements
    // # Classes
    // # Documentation


    // -------------------------------------------------------------
    // # Block elements
    // -------------------------------------------------------------

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: $semi-bold;
        margin: 0 0 $font-size/2 0;
        line-height: 1.2;
    }

    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 26px;
    }

    h3 {
        font-size: 22px;
    }

    h4 {
        font-size: 18px;
    }

    h5 {
        font-size: $font-size;
        text-transform: uppercase;
    }

    p {
        font-weight: $regular;
        margin: 0 0 $font-size 0;
    }


    // -------------------------------------------------------------
    // # Inline elements
    // -------------------------------------------------------------

    a, a:visited {
        text-decoration: none;
        color: $blue;
        cursor: pointer;

        &:hover {
            color: darken($blue, 20%);
        }
    }

    b, strong { font-weight: $semi-bold; }


# Usage

The purpose of this guide is to provide a solid foundation for maintaining
a consistent visual style and a high quality code base across all of our sites.
This page – The Overview – is where we keep our rules and guidelines for
writing clean and effective CSS. The other pages – Base, Layout, Modules
and Tools - is our pattern library divided into different sections.

# Documentation

The purpose of this guide is to provide a solid foundation for maintaining
a consistent visual style and a high quality code base across all of our sites.
This page – The Overview – is where we keep our rules and guidelines for
writing clean and effective CSS. The other pages – Base, Layout, Modules
and Tools - is our pattern library divided into different sections.

# Improvements

<ul class="with-bullet">
    <li><strong>Modularize all class names.</strong> For example, <code>.sidebar-nav</code>. This module could be placed anywhere so a better name is probably <code>.stacked-nav</code> since that's the main characteristics.</li>
    <li><strong>Reduce number of nested element selectors.</strong> Instead of writing <code>.module > h2</code> give the h2 a class name.</li>
    <li><strong>Start using scss-lint.</strong> A tool like this could probably help us enforce the rules and guidelines.</li>
</ul>