# Background music

No audio track was included in the provided assets. Add the invitation's
background song here as:

    public/audio/background-music.mp3

The path is read from a single place — `data/invitation.ts` (`audio.src`) —
so renaming the file only requires updating that one value. Until a file is
added, the music control will render normally but silently (no console
errors; `BackgroundMusic` handles the missing source gracefully).
