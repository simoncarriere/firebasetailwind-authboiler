export default function SocialLogins({ handleSocialAuth, providers }) {
  const { googleProvider, githubProvider, twitterProvider } = providers;

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 text-gray-500 bg-white dark:bg-gray-900 ">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        {/* GOOGLE AUTH  */}
        <div
          onClick={() => handleSocialAuth(googleProvider)}
          className="btn-social-login"
        >
          <span className="sr-only">Sign in with Google</span>
          <svg
            className="w-5 h-5 "
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 30 30"
          >
            <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" />
          </svg>
        </div>

        {/* TWITTER AUTH */}
        <div
          onClick={() => handleSocialAuth(twitterProvider)}
          className="btn-social-login"
        >
          <span className="sr-only">Sign in with Twitter</span>
          <svg
            className="w-5 h-5 "
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </div>

        {/* GITHUB AUTH */}
        <div
          onClick={() => handleSocialAuth(githubProvider)}
          className="btn-social-login"
        >
          <span className="sr-only">Sign in with GitHub</span>
          <svg
            className="w-5 h-5 "
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
