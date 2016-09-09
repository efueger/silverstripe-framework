<div $getAttributesHTML("class") class="ss-tabset $extraClass">
	<ul class="nav nav-tabs">
	<% loop $Tabs %>
		<li class="$FirstLast $MiddleString $extraClass nav-item">
		  <a href="#$id" id="tab-$id" class="nav-link">$Title</a>
		</li>
	<% end_loop %>
	</ul>

	<div class="tab-content">
	<% loop $Tabs %>
		<% if $Tabs %>
			$FieldHolder
		<% else %>
			<div $AttributesHTML>
				<% loop $Fields %>
					$FieldHolder
				<% end_loop %>
			</div>
		<% end_if %>
	<% end_loop %>
	</div>
</div>
