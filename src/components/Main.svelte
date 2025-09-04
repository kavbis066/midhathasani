<script>
    import Step from "./Step.svelte";

    let steps = [
{
            name: 'Onboard INS Arnala: India's next generation anti-submarine warship',
            src: 'https://i.ytimg.com/vi/r2EtbNHPfyE/maxresdefault.jpg',
            service: 'BBC News Hindi',
            href: 'https://www.youtube.com/watch?v=ZeC2Ho8Icw8&t=6s'
        },
{
            name: 'Bio Medical Waste',
            src: 'https://i.ytimg.com/vi/Qg3kMxK_vt4/hqdefault.jpg',
            service: 'BBC News Hindi',
            href: 'https://www.youtube.com/watch?v=Qg3kMxK_vt4'
        },
{
            name: 'India Pakistan: The condition of the family of the person killed in the firing in Jammu',
            src: 'https://i.ytimg.com/vi/PqDHnRl6xYM/hqdefault.jpg',
            service: 'BBC News Hindi',
            href: 'https://www.youtube.com/watch?v=PqDHnRl6xYM&t=48s'
        },
       {
            name: 'India Pakistan Tension: Pakistan shelling in many areas of Jammu',
            src: 'https://i.ytimg.com/vi/Q5aZFIEM0jE/hqdefault.jpg',
            service: 'BBC News Hindi',
            href: 'https://www.youtube.com/watch?v=Q5aZFIEM0jE&t=19s'
        },
        {
            name: 'Delhi Mustafabad Building Collapse',
            src: 'https://i.ytimg.com/vi/5GWO_udRaCg/hqdefault.jpg',
            service: 'BBC News Hindi',
            href: 'https://www.youtube.com/watch?v=5GWO_udRaCg'
        },
        {
            name: 'Kumbh: Muslims are running a community kitchen for Kumbh pilgrims in Prayagraj',
            src: 'https://i.ytimg.com/vi/rICIv20iKcY/hqdefault.jpg',
            service: 'BBC News Hindi',
            href: 'https://www.youtube.com/watch?v=rICIv20iKcY'
        },
        {
            name: 'Ground Report: The condition of those who lost their loved ones in the Kumbh stampede',
            src: 'https://i.ytimg.com/vi/wKjuO4hPgek/hqdefault.jpg',
            service: 'BBC News Hindi',
            href: 'https://www.youtube.com/watch?v=wKjuO4hPgek'
        },
        {
            name: 'India Bangladesh Tension: People of Bangladesh who are waiting for Indian Visa', 
            src: 'https://i.ibb.co/pw0rrP6/Visa.jpg',
            service: 'BBC News',
            href: 'https://youtu.be/S-ybY4vby4I?si=83GN-JJ7tJ92dGUR'
        },
        {
            name: 'What are the Hindus of Bangladesh doing to protect themselves?', 
            src: 'https://i.ibb.co/0KDvtJG/Hindu.jpg',
            service: 'BBC News',
            href: 'https://youtu.be/-AGcXWVTkZc?si=KWmWzEVK32fwiNnK'
        },
        {
            name: 'What will be the impact on Haryana Elections, will this prove to be a ’liturgical test’ for BJP?', 
            src: 'https://i.ibb.co/DGGB7YK/Screenshot-2024-10-09-at-11-05-57-AM.png',
            service: 'BBC News',
            href: 'https://youtu.be/b7t8bqjdADw?si=WJX0VPt8_imNjy7t'
        },
        {
            name: 'How much impact will the politics from the arena have on Haryana elections?', 
            src: 'https://i.ibb.co/5GDfFwC/2.jpg',
            service: 'BBC News',
            href: 'https://youtu.be/lK5wwHjcTrU?si=O2ZXQPyORbVa4xmv'
        },
        {
            name: 'Balasore Train Accident', 
            src: 'https://i.ibb.co/kmPdR6J/Screenshot-2024-05-17-at-2-20-31-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/rzvnA2cVIfw?si=-daLvzKj1doUACAN'
        },
        {
            name: 'India’s deadliest exam scam',
            src: 'https://i.ibb.co/0CdYFwC/Screenshot-2024-05-17-at-2-23-45-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/IvT5Xc0PUw0?si=jcX3KzBfmxFA2iLD'
        },
        {
            name: 'Inside India’s city of students’ suicide',
            src: 'https://i.ibb.co/25xqvgt/Screenshot-2024-05-17-at-2-26-01-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/ZQc52b_xuwI?si=Lu0H9WVTGTm2-KzN'
        },
        {
            name: 'Is BJP playing Hindutva card in Telangana?',
            src: 'https://i.ibb.co/j3rrmSh/Screenshot-2024-05-20-at-5-26-29-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/QoIb72ztqYg?si=mPt9jcUhFpdKBTLY'
        },
        {
            name: 'Youth troubled by unemployment and paper leaks in Telangana',
            src: 'https://i.ibb.co/yYmn1yz/Screenshot-2024-05-17-at-2-26-51-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/gFaMKffpHCI?si=-hZPiCNoUKWg9HyV'
        },
        {
            name: 'Manipur Violence: Losing the loved ones',
            src: 'https://i.ibb.co/hY17JKP/Screenshot-2024-05-17-at-2-28-00-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/Ffntj4Q2_eE?si=WojNZ7CNAzyJT1yM'
        },
        {
            name: 'Farmers Protest: Water cannon and tear gas',
            src: 'https://i.ibb.co/3NznK0V/Screenshot-2024-05-17-at-2-28-57-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/njoGCNGcVZc?si=UPGpFZYlF6pQcML3'
        },
        {
            name: 'Farmers Protest: Why have farmers asked for wet sacks and balls at Shambhu Border?',
            src: 'https://i.ibb.co/KwNJNg0/Screenshot-2024-05-17-at-2-29-05-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/wA2HRp3zLpM?si=Z9b0tOpCJFqSmEYq'
        },
        {
            name: 'Jharkhand: Will we return safely?',
            src: 'https://i.ibb.co/qjQbPP7/Screenshot-2024-05-17-at-2-30-08-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/YDlhqnxcFaA?si=N9jK5N81Fv0NEy6x'
        },
        {
            name: 'Bastar: How is the condition of Bastar after the horrific encounter in Kanker?',
            src: 'https://i.ibb.co/jzGHR0j/Screenshot-2024-05-17-at-2-30-50-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/paDPc7tZkxA?si=xL2JsfbRHTimNoqz'
        },
        {
            name: 'West Bengal: Increasing contract jobs and wages',
            src: 'https://i.ibb.co/hys5zSf/Screenshot-2024-05-17-at-2-31-38-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/Kw0AT7p74Vc?si=-eV5aksCFMBCMkMQ'
        },
        {
            name: 'The Last Man: Bangladeshi Hindus',
            src: 'https://i.ibb.co/6YqXR3T/Screenshot-2024-05-17-at-2-32-36-PM.png',
            service: 'BBC News',
            href: 'https://youtu.be/0OnT5TmGZgo?si=r6GqwDINCXlfnUpo'
        },
        
    ];
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
                to in-depth documentaries and studio shows, I’ve crafted compelling visual stories under tight deadlines and high-pressure environments.
            </p>
            <p class="text-base sm:text-lg md:text-xl text-slate-400">
                At BBC’s Worklife India, I’ve led end-to-end production — pitching, scripting, shooting, and editing stories that resonate. Whether it’s reporting from the field or 
                creating live content for social media, I bring a mix of creativity, precision, and editorial depth to every project.
            </p>
            <p class="text-base sm:text-lg md:text-xl text-slate-400">
                I'm skilled with Sony FX series cameras, gimbals, and mobile journalism tools, and I thrive in collaborative teams. With a strong understanding of the South Asia 
                region, I aim to tell stories that matter — with clarity, empathy, and cinematic craft.
            </p>
        </div>
    </section>

    <!-- Projects section -->
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My <span class="poppins text-violet-400">top</span> stories
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 py-10">
            <Step step={steps[0]}></Step>
            <Step step={steps[1]}></Step>
            <Step step={steps[2]}></Step>
            <Step step={steps[3]}></Step>
            <Step step={steps[4]}></Step>
            <Step step={steps[5]}></Step>
            <Step step={steps[6]}></Step>
            <Step step={steps[7]}></Step>
            <Step step={steps[8]}></Step>
            <Step step={steps[9]}></Step>
            <Step step={steps[10]}></Step>
            <Step step={steps[11]}></Step>
            <Step step={steps[12]}></Step>
            <Step step={steps[13]}></Step>
            <Step step={steps[14]}></Step>
            <Step step={steps[15]}></Step>
            <Step step={steps[16]}></Step>
            <Step step={steps[17]}></Step>
            <Step step={steps[18]}></Step>
            <Step step={steps[19]}></Step>
        </div>
    </section>
</main>
