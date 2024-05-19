---
name: User Story
about: The templates defines a user story
title: ''
labels: ''
assignees: ''

---

**As a** web dev
**I need** a way to list household items I wish to donate
**So that** others who need them can easily find and receive them

### Details and Assumptions
    * The website should have a user-friendly interface for listing items.
    * There should be a system to categorize and tag items for easy searching.
    * The website should allow communication between donors and recipients.
    * Users should be able to create accounts to manage their listings.

### Acceptance Criteria
    gherkin
    Given a registered user is logged in
    When they navigate to the "Donate Items" page
    Then they should see a form to list a new household item

    Given a registered user has filled out the donation form
    When they submit the form
    Then the item should appear in the "Available Items" list for others to see

    Given a recipient is looking for items
    When they search for a specific category or tag
    Then they should see a list of relevant items available for donation
