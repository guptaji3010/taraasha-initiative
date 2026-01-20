import React from 'react';
import diseasesData from '@/data/diseases.json';
import DiseaseDetailClient from '@/components/diseases/DiseaseDetailClient';

// Required for static export
export async function generateStaticParams() {
    return diseasesData.diseases.map((disease) => ({
        id: disease.id,
    }));
}

export default async function DiseaseDetailPage({ params }) {
    const { id } = await params;
    const disease = diseasesData.diseases.find(d => d.id === id);

    return <DiseaseDetailClient disease={disease} />;
}
