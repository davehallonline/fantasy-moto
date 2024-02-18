<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Fantasy-Moto app" />
</svelte:head>



<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
		to the <br />Fantasy-Moto app login
	</h1>

	<div class="row flex-center flex">
		<div class="col-6 form-widget">
			<Auth
				supabaseClient={data.supabase}
				localization={{
					variables: {
					  sign_in: {
						email_input_label: 'Email address',
						email_input_placeholder	: 'Your email address',
						button_label : 'Lets go racin',
					  },
					},
				  }}
				view="magic_link"
				redirectTo={`${data.url}/auth/callback`}
				showLinks={false}
				appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
				
			/>
		</div>
	</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
