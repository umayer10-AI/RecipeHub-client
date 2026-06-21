'use client';
import { addFeature } from '@/lib/api/admin/users';
import { authClient } from '@/lib/auth-client';
import { Star } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AdminFeature = ({ recipe, featured }) => {
  const [isFeatured, setIsFeatured] = useState(featured);
//   console.log(recipe)

  const handleFeature = async () => {

    const token = await authClient.token()
    const t = token?.data

    const data = await addFeature(recipe,t);

    if (data.action === 'added') {
      setIsFeatured(true);
      toast.success('Recipe Featured');
    }

    if (data.action === 'removed') {
      setIsFeatured(false);
      toast.success('Feature Removed');
    }
    redirect('/dashboard/admin/manage-recipe')
  };

  return (
    <button
      onClick={handleFeature}
      className={`flex items-center gap-1 py-2 px-3 text-sm rounded-lg transition-all ${
        isFeatured
          ? 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
          : 'bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20'
      }`}
    >
      <Star size={14} />

      {isFeatured ? 'Featured' : 'Feature'}
    </button>
  );
};

export default AdminFeature;