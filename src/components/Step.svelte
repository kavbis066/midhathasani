<script>
    export let step;
</script>

<a 
    href={step.href}
    target="_blank"
    class="p-4 sm:p-6 flex flex-col gap-4 rounded-lg border border-solid border-violet-700
    text-center group cursor-pointer hover:border-violet-400 duration-200 h-full"
>
    <div
        class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12
        md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        <img 
            src={step.src} 
            alt={step.name} 
            class="w-[287px] h-[161px] object-cover rounded-lg shadow-md"
        />
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl flex-grow">{step.name}</h3>
    <div class="poppins flex justify-center text-slate-400 mt-auto">
        <p>{step.service}</p>
    </div>
    <slot/>
</a>