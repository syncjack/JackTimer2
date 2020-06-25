<style>
    button {
        @apply font-bold py-2 px-4 rounded;
        @apply bg-blue-500 text-white;
    }

    button:disabled {
        @apply bg-gray-700;
        @apply cursor-not-allowed;
    }

    button:hover:enabled {
        @apply bg-blue-700;
    }

    button:focus {
        @apply outline-none;
    }

    input {
        @apply w-full;
    }
</style>

<script>
    import * as workerTimers from "worker-timers";

    let durationSeconds = 60;
    let strokesPerMinute = 100;
    let volume = 0.8;
    let counter = 0;
    let countDown = 4;
    let formattedDuration = "";
    let targetCount = 0;

    let intervalId;
    let running = false;
    let testing = false;

    const beat = new Howl({
        src: ["assets/kick-drum.wav"]
    });

    const cum = new Howl({
        src: ["assets/cum.mp3"]
    });

    const synth = new Tone.Synth({
        oscillator: {
            type: 'triangle',
            modulationType: 'sine',
            modulationIndex: 3,
            harmonicity: 3.4
        },
        envelope: {
            attack: 0.001,
            decay: 0.1,
            sustain: 0.01,
            release: 0.1
        }
    }).toDestination();

    const playBeat = () => {
        synth.triggerAttackRelease('A1', '16n');
    }

    const playBeep = () => {
        synth.triggerAttackRelease('C3', '4n');
    }

    const playStartBeep = () => {
        synth.triggerAttackRelease('C5', '4n');
    }

    const start = () => {
        running = true;
        targetCount = Math.round(durationSeconds * strokesPerMinute / 60)
        intervalId = workerTimers.setInterval(function beatLoop() {
            if (countDown > 0) {
                countDown = countDown - 1;
            } else {
                counter = counter + 1;
            }
            if (counter === targetCount) {
                cum.play();
                stop();
            } else {
                if (countDown > 0) {
                    playBeep();
                } else if (countDown === 0 && counter === 0) {
                    playStartBeep();
                } else {
                    playBeat();
                }
            }
            return beatLoop;
        }(), 60 / strokesPerMinute * 1000);
    }

    const stop = () => {
        running = false;
        counter = 0;
        countDown = 4;
        workerTimers.clearInterval(intervalId);
    }

    const restart = () => {
        if (running) {
            stop();
            start();
        }
    }

    const test = () => {
        testing = true;
        targetCount = 3
        intervalId = workerTimers.setInterval(function testBeatLoop() {
            counter = counter + 1;
            console.log("Test beat");
            playBeat();
            if (counter === targetCount) {
                testing = false;
                stop();
            }
            return testBeatLoop;
        }(), 60 / strokesPerMinute * 1000);
    }

    $: if (strokesPerMinute) {
        restart();
    }

    $: if (volume) {
        Howler.volume(volume);
    }

    $: if (durationSeconds) {
        if (durationSeconds <= 60) {
            formattedDuration = `${durationSeconds} seconds`;
        } else {
            const seconds = (durationSeconds % 60).toString().padStart(2, "0");
            formattedDuration = `${Math.floor(durationSeconds / 60)}:${seconds} minutes`;
        }
    }

</script>

<div class="container mx-auto px-4 py-4">
    <div class="grid grid-flow-row gap-4">
        <div>
            {#if !running}
                <button on:click={start} disabled={testing}>Start</button>
                <button on:click={test} disabled={testing}>Test (Play 3 beats)</button>
            {:else}
                <button on:click={stop}>Stop</button>
            {/if}
        </div>
        {#if running}
            {#if countDown > 0}
                <div>
                    Ready? {countDown}
                </div>
            {:else}
                <div class="font-mono">
                    Stokes: {counter} / {targetCount}
                </div>
            {/if}
        {/if}
        {#if !running}
            <div class="grid grid-cols-6 gap-4">
                <div class="col-span-5">
                    <label>Duration
                        <input step="15" min="15" max="1800" type="range" bind:value={durationSeconds}>
                    </label>
                </div>
                <div class="col-span-1 flex pb-1">
                    <output class="flex self-end">{formattedDuration}</output>
                </div>
            </div>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-span-5">
                    <label>Strokes per Minute
                        <input step="10" min="10" max="400" type="range" bind:value={strokesPerMinute}>
                    </label>
                </div>
                <div class="col-span-1 flex pb-1">
                    <output class="flex self-end">{strokesPerMinute}</output>
                </div>
            </div>
        {/if}
        <div class="grid grid-cols-6 gap-4">
            <div class="col-span-5">
                <label>Volume
                    <input step="0.1" min="0" max="1" type="range" bind:value={volume}>
                </label>
            </div>
            <div class="col-span-1 flex pb-1">
                <output class="flex self-end">{volume * 100}%</output>
            </div>
        </div>
    </div>
</div>