
<script>

    import "../app.css";
	import Input from './Input.svelte';
	import Chart from './Chart.svelte';
	import ChartsStats from './ChartsStats.svelte';
	$: principal = 10000;
	$: rate = 5.2;
	$: age = 25;
	$: retirementAge = 65;
	$: compoundingYearly = 1;
	$: monthlyContributions = 100;
	$: chartData = [];
	$: totalContributions = principal + monthlyContributions * (retirementAge - age) * 12;
	$: totalSaved =
		principal * Math.pow(1 + rate / 100 / compoundingYearly, retirementAge - age) +
		monthlyContributions * 12;

	$: {
		let z = [[], []];
		for (let index = 0; index < retirementAge - age + 1; index++) {
			if (index === 0) {
				//without savings
				let withoutSavings = principal + index;

				let withSavings =
					principal * Math.pow(1 + rate / 100 / compoundingYearly, compoundingYearly * index);
				//with savings
				// z.push([withoutSavings, withSavings]);
				z[0].push(withoutSavings);
				z[1].push(withSavings);
			} else {
				let withoutSavings = principal + index * monthlyContributions * 12;
				let withSavings =
					z[1][index - 1] * Math.pow(1 + rate / 100 / compoundingYearly, compoundingYearly * 1) +
					monthlyContributions * 12;
				z[0].push(withoutSavings);
				z[1].push(withSavings);
			}
		}
		chartData = z;
	}
</script>

<div class="container mx-auto px-4">
    <div class="flex flex-wrap  gap-2">
        <div class="w-full md:max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form>
                <Input bind:value={principal} text="Starting Savings" step={500} />
                <Input bind:value={age} text="Your Age" step={1} />
                <Input bind:value={retirementAge} text="Retirement Age" step={1} />
                <Input bind:value={rate} text="Interest Rate %" step={0.1} />
                <Input bind:value={monthlyContributions} text="Monthly Contributions" step={100} />
                <!-- <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Calculate
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div> -->
            </form>
            <p class="text-center text-gray-500 text-xs">&copy;2020 Test Information here</p>
        </div>
        <div class="flex-grow min-w-[500px]  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <Chart data={chartData} />
        </div>
    </div>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <ChartsStats {chartData} />
    </div>
    
</div>