import Papa from 'papaparse';

/**
 * Prerendering this page at build time (static, fast)
 * The build gets re-triggered automatically by the AppScript -> Vercel Deploy Hook
 * Whenever the Google Sheet is updated, the AppScript will call the Vercel Deploy Hook to trigger a new build.
 */

export const prerender = true;

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQGZF5T7W0V3p9-qYs44yaU0jvHUf3gb-CvkzgRFBGihqzrd8vUtzPQk95Ol4_GyGofUPQqkq1JMV1S/pub?gid=0&single=true&output=csv';

export async function load({ fetch }) {
    const res = await fetch(CSV_URL);
    const csvText = await res.text();
    const { data } = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
    });

    // Trim whitespaces on every field and drip fully-empty rows
    const steps = data.map((row) => {
        const clean = {};
        for(const key in row) {
            clean[key.trim()] = (row[key]??'').trim();
        }
        return clean;
    })
    .filter((row) => row.name); // ignore rows where name is blank

    return { steps };
}