var gameInstance;

gameInstance = UnityLoader.instantiate("gameContainer", "./assets/lib/webgl.json", {
  onProgress: UnityProgress,
  Module: {
    onRuntimeInitialized: function () {
      UnityProgress(gameInstance, "complete");
    },
  },
});
