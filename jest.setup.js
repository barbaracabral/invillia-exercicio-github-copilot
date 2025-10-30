// Extend expect with jest-dom matchers
// modern versions export the matchers from the package root
try {
	require('@testing-library/jest-dom');
} catch (e) {
	// fallback to older path if present
	try {
		require('@testing-library/jest-dom/extend-expect');
	} catch (err) {
		// rethrow original error to surface installation issues
		throw e;
	}
}

// Ensure tests run in a known timezone and locale if needed
process.env.TZ = 'UTC';
