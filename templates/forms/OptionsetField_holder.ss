<div id="$HolderID" class="field<% if $extraClass %> $extraClass<% end_if %>">
	<% if $Title %><label class="left">$Title</label><% end_if %>
	<div class="middleColumn">
		$Field
	</div>

  	<%-- TODO: refactor so it renders the below using a method, instead of template conditional --%>
	<% if $RightTitle || $Message || $Description %>
		<% if $RightTitle %><p class="text-muted">$RightTitle</p><% end_if %>

		<%-- TODO: use Bootstrap's alert classes in $MessageType --%>
		<% if $Message %><div class="alert $MessageType" role="alert">$Message</div><% end_if %>

		<% if $Description %><p class="description">$Description</p><% end_if %>
	<% end_if %>
</div>
