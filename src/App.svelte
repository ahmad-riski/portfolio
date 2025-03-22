<script>
	import Footer from './lib/layouts/Footer.svelte'

  let Component = $state(null)
  async function loadComponent(componentName) {
    if (componentName === 'Homepage') {
      Component = (await import('./lib/contents/Homepage.svelte')).default
    } else if (componentName === 'About') {
      Component = (await import('./lib/contents/About.svelte')).default
    } else if (componentName === 'Tech') {
      Component = (await import('./lib/contents/TechStack.svelte')).default
    } else if (componentName === 'Projects') {
      Component = (await import('./lib/contents/Projects.svelte')).default
    }
  }
  loadComponent('Homepage')
</script>

<nav class="flex fixed gap-10 p-5 w-full justify-center">
	<button class="link" 
		on:click={() => loadComponent('Homepage')}>Home
	</button>
	<button class="link" 
		on:click={() => loadComponent('About')}>About
	</button>
	<button class="link" 
		on:click={() => loadComponent('Tech')}>Tech
	</button>
	<button class="link" 
		on:click={() => loadComponent('Projects')}>Projects
	</button>
</nav>

{#if Component}
	<section>
	 	<svelte:component this={Component}/>
	</section>
{/if}

<Footer/>
