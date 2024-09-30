const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;

    // Log to check if token is accessible
    console.log('GitHub Token:', import.meta.env.VITE_GITHUB_TOKEN);

    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    // Log response status for debugging
    console.log('Response Status:', response.status);

    if (!response.ok) {
      throw new Error(
        `API request failed with status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log('Fetched Data:', data); // Log the fetched data

    return data;
  } catch (err) {
    console.error('An error occurred while fetching GitHub users:', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    // Log response status for debugging
    console.log('Response Status:', response.status);

    if (!response.ok) {
      throw new Error(
        `API request failed with status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log('Fetched User Data:', data); // Log the fetched user data

    return data;
  } catch (err) {
    console.error('An error occurred while fetching GitHub user:', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };

