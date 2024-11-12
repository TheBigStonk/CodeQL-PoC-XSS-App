/**
* @name Use of the dangerouslySetInnerHTML property within an application
* @description Without justification dangerouslySetInnerHTML can be abused to inject javascript and enabled reflected XSS
* @kind problem
* @problem.severity recommendation
* @id js/detect-dangerouslySetInnerHTML
* @tags maintainability
* @precision high
*/

import javascript

from JsxAttribute attr
where attr.getName() = "dangerouslySetInnerHTML"
select attr, "Avoid using dangerouslySetInnerHTML as it can lead to XSS vulnerabilities."