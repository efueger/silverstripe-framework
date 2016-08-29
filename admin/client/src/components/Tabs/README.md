# Tabs

For separating content into tabs without the need for separate pages.

This extends from `react-bootstrap` with similar expected behaviours, only difference is that when
there is only 1 tab (or none) in the Tabset only the content will show without the clickable Tab.

## Example

```
<Tabs defaultActiveKey="Main" id="Root">
    <TabItem name="Main" title="Main">
        My first tab content
    </TabItem>
    <TabItem name="Settings" title="Settings">
        My settings tab here
    </TabItem>
</Tabs>
```

## Tabs Properties

 * `id` (string) (required): The ID for the Tabset.
 * `defaultActive` (string): The default tab to open, should match the name of a child `TabItem`,
   will default to the first Tab child.
 * `active` (string): Used with `onSelect` action handler, forces the given tab to open, should
   match the name of a child `TabItem`.
 * `onSelect` (function): Action handler for when a tab is clicked, if an override for the default
   functionality is required, will need to handle own state.
 * `extraClass` (string): Extra classes the Tabset should have.

## TabItem Properties

 * `name` (string) (required): A key to match with the Tabset `activeKey` property to show the content.
 * `title` (string): The label to display for the Tab, can be set `null` to hide the Tab.
 * `disabled` (boolean): Whether the Tab is clickable, or greyed out.
 * `extraClass` (string): Extra classes the Tab should have.
