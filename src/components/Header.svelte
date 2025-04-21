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
                        <!-- <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.3 299.3" height="72px" width="50px">
                            <path d="M127.49,139.35h-53.77v-16.5c0-7.7-.69-12.61-2.06-14.72-1.38-2.11-3.67-3.16-6.88-3.16-3.49,0-6.12,1.42-7.91,4.27s-2.68,7.16-2.68,12.94c0,7.43,1,13.03,3.02,16.79,1.92,3.76,7.37,8.3,16.36,13.61,25.77,15.3,42.01,27.85,48.7,37.66,6.69,9.81,10.04,25.63,10.04,47.45,0,15.86-1.86,27.55-5.57,35.07-3.71,7.52-10.89,13.82-21.52,18.91-10.64,5.09-23.01,7.63-37.13,7.63-15.5,0-28.72-2.94-39.68-8.8-10.96-5.87-18.13-13.34-21.52-22.42-3.39-9.08-5.09-21.96-5.09-38.65v-14.58h53.77v27.09c0,8.34.76,13.71,2.27,16.09,1.51,2.39,4.19,3.58,8.05,3.58s6.72-1.51,8.6-4.54c1.88-3.03,2.82-7.52,2.82-13.48,0-13.11-1.79-21.68-5.36-25.72-3.67-4.03-12.7-10.77-27.09-20.22-14.4-9.54-23.93-16.46-28.61-20.77-4.68-4.31-8.55-10.27-11.62-17.88-3.07-7.61-4.61-17.33-4.61-29.16,0-17.05,2.18-29.52,6.53-37.41,4.35-7.88,11.39-14.05,21.11-18.5,9.72-4.45,21.46-6.67,35.21-6.67,15.04,0,27.85,2.43,38.44,7.29,10.59,4.86,17.6,10.98,21.04,18.36,3.44,7.38,5.16,19.92,5.16,37.61v8.8Z" fill="#fff"/>
                            <circle cx="66.64" cy="28.47" r="28.47" fill="#8b5cf6"/>
                            <path d="M95.1,139.35v-67.22c-9.29-3.21-20.02-4.85-32.25-4.85-9.53,0-18.06,1.09-25.65,3.23v122.03s0,0,0,0c.12.08.26.18.39.26l-.39.18v.02c2.37,1.61,4.92,3.32,7.63,5.12,14.39,9.44,23.43,16.18,27.09,20.22,3.55,4,5.33,12.47,5.36,25.39-.02,5.89-.95,10.34-2.82,13.34-1.88,3.03-4.75,4.54-8.6,4.54s-6.53-1.19-8.05-3.58c-1.51-2.38-2.27-7.75-2.27-16.09v-27.09H1.79v14.58c0,16.69,1.7,29.57,5.09,38.65,1.76,4.7,4.54,8.97,8.32,12.81v.47c3.52,3.58,7.92,6.78,13.2,9.61,8.48,4.54,18.35,7.31,29.55,8.33,6.18-.47,11.2-1.3,15.03-2.49,6.37-1.97,11.41-5.52,15.14-10.66,3.73-5.13,5.82-10.89,6.28-17.26.46-6.37.69-20.7.69-42.98v-59.68c-.25-.17-.51-.35-.77-.52-.85-.58-1.72-1.17-2.6-1.76-.35-.23-.7-.47-1.06-.7-1.08-.71-2.17-1.43-3.3-2.15-.31-.2-.64-.41-.96-.61-1.01-.65-2.04-1.3-3.09-1.96-.26-.16-.51-.32-.77-.49-1.25-.78-2.54-1.57-3.85-2.37-.32-.19-.64-.39-.96-.58-1.37-.83-2.76-1.67-4.19-2.51-8.99-5.31-14.44-9.85-16.36-13.61-2.01-3.76-3.02-9.36-3.02-16.79,0-5.78.89-10.09,2.68-12.94s4.42-4.27,7.91-4.27c3.21,0,5.5,1.06,6.88,3.16,1.38,2.11,2.06,7.01,2.06,14.72v16.5h21.39Z" fill="#8b5cf6"/>
                        </svg> -->

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