"use client";
import { deleteRecipeButton } from "@/lib/api/customer/recipe";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const DeleteRecipe = ({recipe}) => {

    const deleteButton = async() => {

        const token = await authClient.token()
        const t = token?.data
        
        const data = await deleteRecipeButton(recipe._id, t)
        if(data.deletedCount > 0){
            toast.error('Deleted')
            redirect('/dashboard/customer/my-recipes')
        }
    }

  return (
    <AlertDialog>
      
      <AlertDialog.Trigger>
        <button className="rounded-lg bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-600">
          Delete
        </button>
      </AlertDialog.Trigger>

      {/* BACKDROP */}
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete recipe permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete this recipe. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button onClick={deleteButton} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>

    </AlertDialog>
  );
};

export default DeleteRecipe;