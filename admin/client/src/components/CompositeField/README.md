# CompositeField

For containing groups of fields in a container element.

## Example

```
<CompositeField id="Container">
    <TextField name="FirstName" />
    <TextField name="LastName" />
</Tabs>
```

## Properties

 * `name` (string) (required): A key to match with the Tabset `activeKey` property to show the content.
 * `title` (string): The label to display for the Tab, can be set `null` to hide the Tab.
 * `disabled` (boolean): Whether the Tab is clickable, or greyed out.
 * `extraClass` (string): Extra classes the Tab should have.
