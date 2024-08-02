function showGraph(graphNumber) {
  // Hide all graphs
  var graphs = document.querySelectorAll('.graph');
  graphs.forEach(function(graph) {
    graph.style.display = 'none';
  });

  // Show the selected graph
  var iframe = document.getElementById('graphFrame');
  if (iframe) {
    iframe.src = 'map' + graphNumber + '.html';
    iframe.style.display = 'block';
  }

  var buttons = document.querySelectorAll('.graph-button');
  buttons.forEach(function(button) {
    button.classList.remove('selected');
  });

  // Add 'selected' class to the clicked button
  var clickedButton = document.getElementById('graph' + graphNumber + 'Button');
  if (clickedButton) {
    clickedButton.classList.add('selected');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  showGraph(1); // This will automatically load the first graph (map1.html)
  document.getElementById('graph1Button').classList.add('selected'); // Adding a class for styling to indicate the selected button
});