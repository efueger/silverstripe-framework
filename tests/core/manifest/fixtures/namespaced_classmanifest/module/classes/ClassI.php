<?php
namespace SilverStripe\Framework\Tests;

//whitespace here is important for tests, please don't change it
use ModelAdmin;
use Controller  as  Cont ;
use SS_HTTPRequest as Request, SS_HTTPResponse as Response
use silverstripe\test\ClassA;
use \Object;
use SilverStripe\Security\PermissionProvider;


class ClassI extends ModelAdmin implements PermissionProvider {
}
