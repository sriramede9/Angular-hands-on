export class dataService {
  
  serverElements: Array<{ type: string; name: string; content: string }> = [
    { type: "server", name: "Kiera", content: "test content of kiara" }
  ];

  pushToServerElements(serverData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  pushTobluePrintServerElements(serverData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}
