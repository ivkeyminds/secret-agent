# DOMImplementation

<div class='overview'>The <code><strong>DOMImplementation</strong></code> interface represents an object providing methods which are not dependent on any particular document. Such an object is returned by the <a href="/en-US/docs/Web/API/Document/implementation" title="The Document.implementation property returns a DOMImplementation object associated with the current document."><code>Document.implementation</code></a> property.</div>

## Properties

<ul class="items properties">

</ul>

## Methods

<ul class="items methods">
  <li>
    <a href="">createDocument()</a>
    <div>Creates and returns an <a href="/en-US/docs/Web/API/XMLDocument" title="The XMLDocument interface represents an XML document. It inherits from the generic Document and does not add any specific methods or properties to it: nevertheless, several algorithms behave differently with the two types of documents."><code>XMLDocument</code></a>.</div>
  </li>
  <li>
    <a href="">createDocumentType()</a>
    <div>Creates and returns a <a href="/en-US/docs/Web/API/DocumentType" title="The DocumentType interface represents a Node containing a doctype."><code>DocumentType</code></a>.</div>
  </li>
  <li>
    <a href="">createHTMLDocument()</a>
    <div>Creates and returns an HTML <a href="/en-US/docs/Web/API/Document" title="The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."><code>Document</code></a>.</div>
  </li>
  <li>
    <a href="">hasFeature()</a>
    <div>Returns a <a href="/en-US/docs/Web/API/Boolean" title="REDIRECT Boolean [en-US]"><code>Boolean</code></a> indicating if a given feature is supported or not. This function is unreliable and kept for compatibility purpose alone: except for SVG-related queries, it always returns <code>true</code>. Old browsers are very inconsistent in their behavior.</div>
  </li>
</ul>

## Events