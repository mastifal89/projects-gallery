import axios from "axios";

export default async function handler(req, res) {
  const { username } = req.query;

  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ message: error.response.data });
  }
}
