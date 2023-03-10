enum TypesOfMedia {
  VIDEO = "video",
  AUDIO = "audio",
}

enum FormatsOfMedia {
  MP4 = ".mp4",
  MOV = ".mov",
  MKV = ".mkv",
  FLV = ".flv",
  WEBM = "webM",
}

interface IMedia {
  name: string;
  type: TypesOfMedia;
  format: FormatsOfMedia;
  subtitles?: string;
  marks?: unknown;
}

function playMedia(
  { name, type, format, subtitles, marks }: IMedia = {
    name: "example",
    type: TypesOfMedia.AUDIO,
    format: FormatsOfMedia.MP4,
  }
): string {
  let marksLog: string;

  if (Array.isArray(marks)) {
    marksLog = marks.join(", ");
  } else if (typeof marks === "string") {
    marksLog = marks;
  } else {
    marksLog = "Unsupported typeof marks";
  }

  console.log(`Media ${name} is ${format}
    Marks ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);

  return "Media started";
}

playMedia({
  name: "WOW",
  format: FormatsOfMedia.MOV,
  type: TypesOfMedia.AUDIO,
  subtitles: "hmhmmmhmhh",
  marks: ["4:30", "5:40"],
});
