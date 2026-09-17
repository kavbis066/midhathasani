<script>
    import Step from "./Step.svelte";

    // Steps now come from the Google Sheet via +page.js -> +page.svelte,
    // instead of being hardcoded here.
    export let steps = [];

    const PAGE_SIZE = 9;

    let visibleCount = PAGE_SIZE;

    $: visibleSteps = steps.slice(0, visibleCount);
    $: hasMore = visibleCount < steps.length;
    $: hasLess = visibleCount > PAGE_SIZE;

    function showMore() {
        visibleCount += PAGE_SIZE;
    }

    function showLess() {
        visibleCount = PAGE_SIZE;
    }
</script>

<main class="flex flex-col flex-1 p-4">
    <!-- Intro section -->
    <section 
        id="introPage" 
        class="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-14 items-start"
    >
        <div class="flex flex-col text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <p class="text-base sm:text-lg md:text-xl">Hi, my name is</p>
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                <span class="poppins text-violet-400">Midhat</span> Hasani.
            </h2>
            <h3 
                class="font-semibold text-4xl sm:text-5xl md:text-6xl text-slate-400 leading-tight mt-[-10px]"
            >
                Telling stories. From 
                <span class="poppins text-violet-400">lens</span> to 
                <span class="poppins text-violet-400">screen</span>.
            </h3>
            <p class="text-base sm:text-lg md:text-xl text-slate-400">
                I'm a <span class="text-violet-400">multilingual video journalist</span> and <span class="text-violet-400">producer</span> at the BBC News, blending on-ground reporting with 
                studio production.
            </p>
            <a 
                href="mailto:shaadmidhat@gmail.com" 
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full
                bg-white text-slate-950 cursor-pointer"
                target="_blank"
            >
                <div 
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                ></div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div 
            class="relative shadow-lg transition-all max-w-xs mx-auto rounded-md h-[300px] group hover:-translate-x-1 hover:-translate-y-1 focus:-translate-x-1 focus:-translate-y-1"
        >
            <div class="absolute inset-0 bg-slate-950 rounded-md mix-blend-screen h-[300px]"></div>
            <div class="relative rounded-md overflow-hidden contrast-100 transition-all group-hover:filter-none group-hover:mix-blend-normal">
                <img src="images/midhat.JPG" alt="Headshot" class="object-cover w-full h-full" />
            </div>
            <div 
                class="absolute top-[14px] left-[14px] w-full h-[320px] rounded-md border-2 border-violet-500 -z-10 
                transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
            ></div>
        </div>
    </section>


    <!-- About section -->
    <section id="about" 
        class="mt-[-80px] sm:mt-[-100px] md:mt-[-110px] lg:mt-[-120px] pt-32 lg:pt-5 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative py-4"
        >
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <div class="flex flex-col gap-5 w-full mx-auto max-w-[800px]">
            <p class="text-base sm:text-lg md:text-xl text-slate-400">
                I'm a multilingual video journalist and producer with over 7 years of experience in digital news, field reporting, and multi-platform production. From breaking news 
                to in-depth documentaries and studio shows, I've crafted compelling visual stories under tight deadlines and high-pressure environments.
            </p>
            <p class="text-base sm:text-lg md:text-xl text-slate-400">
                At BBC's Worklife India, I've led end-to-end production — pitching, scripting, shooting, and editing stories that resonate. Whether it's reporting from the field or 
                creating live content for social media, I bring a mix of creativity, precision, and editorial depth to every project.
            </p>
            <p class="text-base sm:text-lg md:text-xl text-slate-400">
                I'm skilled with Sony FX series cameras, gimbals, and mobile journalism tools, and I thrive in collaborative teams. With a strong understanding of the South Asia 
                region, I aim to tell stories that matter — with clarity, empathy, and cinematic craft.
            </p>
        </div>
    </section>

    <!-- Projects section -->
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-16">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My <span class="poppins text-violet-400">top</span> stories
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 py-10">
            {#each visibleSteps as step (step.href)}
                <Step {step}></Step>
            {/each}
        </div>

        {#if hasMore || hasLess}
            {#if hasMore}
                <button
                    on:click={showMore}
                    class="mx-auto px-6 py-3 rounded-full border border-violet-700 text-slate-400
                    hover:border-violet-400 hover:text-violet-400 duration-200 poppins"
                >
                    Show more &darr;
                </button>
            {:else if hasLess}
                <button
                    on:click={showLess}
                    class="mx-auto px-6 py-3 rounded-full border border-violet-700 text-slate-400
                    hover:border-violet-400 hover:text-violet-400 duration-200 poppins"
                >
                    Show less &uarr;
                </button>
            {/if}
        {/if}
    </section>
</main>