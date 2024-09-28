function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Ub9qUukAp6":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="Backsound.mp3";
audio.load();
audio.play();
}

