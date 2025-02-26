async function fetchRepositories() {
	const response = await fetch('https://api.github.com/users/grinsteindavid/repos');
	const repositories = await response.json();
	const sliderContainer = document.querySelector('.row.services-content');

	repositories.forEach(({ name, svn_url, description }) => {
		const serviceContainer = document.createElement('div');
		const iconContainer = document.createElement('span');
		const icon = document.createElement('i');
		const serviceContent = document.createElement('div');
		const serviceContentTitleContainer = document.createElement('a');
		const serviceContentTitleText = document.createElement('span');
		const serviceContentDescription = document.createElement('p');

		serviceContainer.classList.add('service');
		iconContainer.classList.add('icon');
		icon.classList.add('fa');
		icon.classList.add('fa-github');
		serviceContent.classList.add('service-content');
		serviceContentDescription.classList.add('desc');
		serviceContentTitleContainer.setAttribute('target', '_blank');
		serviceContentTitleContainer.setAttribute('href', svn_url);

		serviceContentTitleContainer.style.color = 'white';
		serviceContentTitleText.style.textTransform = 'uppercase';
		serviceContentTitleText.style.fontWeight = 'bolder';
		serviceContentTitleText.style.marginLeft = '5px';

		serviceContentTitleText.textContent = name;
		serviceContentDescription.textContent = description;

		iconContainer.appendChild(icon);
		serviceContent.appendChild(serviceContentTitleContainer);
		serviceContent.appendChild(serviceContentDescription);

		serviceContentTitleContainer.appendChild(iconContainer);
		serviceContentTitleContainer.appendChild(serviceContentTitleText);
		serviceContainer.appendChild(serviceContent);

		sliderContainer.appendChild(serviceContainer);
	});
}

fetchRepositories();
