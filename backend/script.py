#!/usr/bin/env python3
import sys
import subprocess
from pathlib import Path

def run(cmd):
    print(">", " ".join(cmd))
    subprocess.run(cmd, check=True)

def main():
    if len(sys.argv) != 2:
        print(f"Uso: {sys.argv[0]} <arquivo.mp4>")
        sys.exit(1)

    inp = Path(sys.argv[1])
    base = inp.with_suffix("")

    # 1) MP4 → WebM
    run([
        "ffmpeg", "-y", "-i", str(inp),
        "-c:v", "libvpx-vp9", "-b:v", "1M",
        "-c:a", "libopus", f"{base}.webm"
    ])

    # 2) Frame JPG
    run([
        "ffmpeg", "-y", "-i", str(inp),
        "-ss", "00:00:01", "-vframes", "1",
        f"{base}.jpg"
    ])

    # 3) Frame PNG
    run([
        "ffmpeg", "-y", "-i", str(inp),
        "-ss", "00:00:01", "-vframes", "1",
        f"{base}.png"
    ])

    print("Concluído!")

if __name__ == "__main__":
    main()
