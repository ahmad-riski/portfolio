<script>
	import Svelte from '../../assets/svelte.svg'
</script>
<footer class="p-5 md:p-10 text-gray-300 flex flex-col md:flex-row text-center md:justify-around border-t border-t-indigo-700">
      <nav class="flex flex-col  mb-5 md:mb-0">
        <span class="mb-2 text-gray-500">Created with</span>
        <img src={Svelte} alt="svelte-logo" class=" h-10 md:h-15 mb-2" />
        <span class="text-gray-600">&copy; Copyright { new Date().getFullYear() }</span>
      </nav>
      <nav class="flex flex-col mb-5 md:mb-0">
        <h6 class="font-semibold mb-2">Social Media</h6>
        <a href="https://youtube.com/@riski-dev" class="hover:text-indigo-400">Youtube</a>
        <a href="https://facebook.com/profile.php?id=61572711454315" class="hover:text-indigo-400">Facebook</a>
        <a href="https://github.com/ahmad-riski" class="hover:text-indigo-400">Github</a>
      </nav>
      <nav class="flex flex-col md:mb-0">
        <h6 class="font-semibold mb-2">Contact</h6>
        <a href="https://wa.me/62895800692253" class="hover:text-indigo-400">Whatsapp</a>
        <a href="mailto:console.log0000000@gmail.com" class="hover:text-indigo-400">Gmail</a>
      </nav>
    </footer>
