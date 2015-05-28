# Introduction

<p class="alert edit"><strong>Note!</strong> This is a living style guide and it's far from finished. Some sections may be incomplete.</p>

The purpose of this guide is to provide a solid foundation for maintaining
a consistent visual style and a high quality code base across all of our sites.
This page – The Overview – is where we keep our rules and guidelines for
writing clean and effective CSS. The other pages – Base, Layout, Modules
and Tools - is our pattern library divided into different sections.

      WHAT WE'LL COVER:

    - Quick Facts
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

We try to stay organized and write consistent CSS, so we structure each file according to a set of rules.
This is a simple example showing how every file should look:

    /*doc
    ---
    title: Alerts
    name: alerts
    category: Modules
    ---

    Alerts can be used to display important messages with great contrast
    to draw the attention of the user. It comes in a few different colors.
    See examples below for available options.

    ```html_example
    <p class="alert success">This is an alert with a success message</p>
    <p class="alert error">This is an alert with an error message</p>
    <p class="alert edit">This is an longform alert with muted message.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    ```

    */


    .alert {
        color: $white;
        padding: 7px 13px 6px;
        font-size: $font-size-medium;
        margin-bottom: $margin;
        border-radius: $border-radius;
        display: block;

        &.success { background: $green; }

        &.error { background: $red; }

        &.edit {
            background: $base-grey;
            color: $black;
        }

        // Remove link color in alert
        a {
            color: white;

            &.underline {
                border-bottom: 1px dotted rgba(white, 0.5);
            }
        }
    }

Every file starts with a comment section. This is the part that automatically
generates our style guide. Try to keep every file small and readable.

# Usage

Coming soon...

# Documentation

Coming soon...

# Improvements

<ul class="with-bullet">
    <li><strong>Modularize all class names.</strong> For example, <code>.sidebar-nav</code>. This module could be placed anywhere so a better name is probably <code>.stacked-nav</code> since that's the main characteristics.</li>
    <li><strong>Reduce number of nested element selectors.</strong> Instead of writing <code>.module > h2</code> give the h2 a class name.</li>
    <li><strong>Start using scss-lint.</strong> A tool like this could probably help us enforce the rules and guidelines.</li>
</ul>