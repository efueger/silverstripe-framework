<div class="fieldholder-small" id="$HolderID.ATT">
	<% if $Title %><label class="fieldholder-small-label" <% if $ID %>for="$ID"<% end_if %>>$Title</label><% end_if %>
	$Field
	<% if $RightTitle %><label class="right fieldholder-small-label" <% if $ID %>for="$ID"<% end_if %>>$RightTitle</label><% end_if %>
</div>
<% if $RightTitle %>
	<p class="form__field-extra-label" <% if $ID %>id="extra-label-$ID"<% end_if %>>$RightTitle</p>
<% end_if %>
