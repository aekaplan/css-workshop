function ClipboardInteractor(copyButtonSelector, copyTargetSelector) {
  var copyTargetSelector = copyTargetSelector || '';
  client = new ZeroClipboard($(copyButtonSelector));
  client.on('ready', function(event) {
    client.on('copy', function(event) {
      var copiedText = $(event.target).siblings(copyTargetSelector).text().trim();
      event.clipboardData.setData('text/plain', copiedText);
    });
  });
}
