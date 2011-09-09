# jquery gridsystem
A simple and decent gridsystem overlay.

## Integration

Attach it to the grid system container element:

<pre><code>
$('#container').gridxy();
</code></pre>

customize:
<pre><code>
$('#container').gridxy({
			'gridWidth' : 960,
			'cols' : 12,
			'gutterWidth' : 20,
			'rowHeight' : 18,
			'offsetY': 9,
			'colStyle' : 'rgba(255, 0, 0, 0.05)',
			'rowStyle' : 'rgba(0, 0, 255, 0.1)'
		});
</code></pre>

## Usage
Just add the following hashes to your URL and the grid system overlay will be displayed:

<ul>
	<li>#grid</li>
	<li>#gridx</li>
	<li>#gridy</li>
</ul>

	Example: http://example.com/#grid

or

	Example: http://example.com/#gridx 

