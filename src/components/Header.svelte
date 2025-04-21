<script>
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment"; // Import browser check

    export let y;
    let tabs = [
        {name: 'About me', link: '#about'},
        {name: 'Projects', link: '#projects'},
    ];

    let lastScrollY = 0;
    let isScrollingUp = true;

    const handleScroll = () => {
        if (browser) {
            const currentScrollY = window.scrollY;
            isScrollingUp = currentScrollY < lastScrollY;
            lastScrollY = currentScrollY;
        }
    };

    onMount(() => {
        if (browser) {
            window.addEventListener("scroll", handleScroll);
        }
    });

    onDestroy(() => {
        if (browser) {
            window.removeEventListener("scroll", handleScroll);
        }
    });

</script>

<header class={"sticky top-0 left-0 w-full z-10 duration-200 transition-transform " + 
    (isScrollingUp ? "translate-y-0" : "-translate-y-full")}>
    <div class="px-6 flex items-center justify-between py-6 bg-slate-950">
        <div class="relative inline-block p-4">
            <div class="logo flex items-center">
                <a href="#" aria-label="home" class="h-[48px] w-[48px]">
                    <div class="logo-container">
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 132.2 118" height="72px" width="50px">
                            <defs>
                              <style>
                                .st0 {
                                  fill: #94a3b8;
                                }
                          
                                .st1 {
                                  fill: #8b5cf6;
                                  fill-rule: evenodd;
                                }
                              </style>
                            </defs>
                            <path class="st1" d="M116.8,12c-6.7-7.4-16.1-12-26.5-12s-17.5,3.6-24,9.5C59.9,3.6,51.5,0,42.4,0S22.6,4.6,15.9,12c-6.4,7.1-10.4,16.7-10.4,27.3v51.7h25.7v-51.7c0-4,1.4-7.5,3.7-10.1,2-2.2,4.7-3.6,7.6-3.6s5.6,1.4,7.6,3.6c1.8,2,3.1,4.6,3.5,7.5,0,.8,0,1.7,0,2.5v21.6h.4v30h25.7v-51.7h-.1c0-.8,0-1.7,0-2.5.5-3,1.7-5.6,3.5-7.5,2-2.2,4.7-3.6,7.6-3.6s5.6,1.4,7.6,3.6c2.3,2.5,3.7,6.1,3.7,10.1v51.7h25.7v-51.7c0-10.6-4-20.2-10.4-27.3Z"/>
                            <rect class="st0" y="95.9" width="132.2" height="22.1"/>
                        </svg>

                    </div>
                </a>
            </div>
        </div>
        <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
            {#each tabs as tab, index}
                <a href={tab.link} class="duration-200 hover:text-violet-400">
                    <p>{tab.name}</p>
                </a>
            {/each}
        </div>
        <a href="/Resume.pdf" target="_blank" 
            aria-label="resume link"
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
            <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
            <h4 class="relative z-9">Resume</h4>
        </a>
    </div>
</header>