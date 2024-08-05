<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100' ],
            'email' => ['required', 'string', 'email', 'max:100','unique:users'],
            'password' => ['required', 'string', 'max:100'],
        ]);

        if($validator->fails()){
            return response()->json([
                'error' =>true,
                'message'=>$validator->errors()
            ],400);
        };

        $user=User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']) ,
        ]);

        return response()->json([
            'error' =>false,
            'message'=>"Registration completed successfully",
            'data'=> $user,
        ],200);
    }


    public function index(Request $request) {
        $users = User::get();

        return response()->json([
            'error' =>false,
            'data' => $users
        ],200);
    }


    public function update(Request $request , $id) {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'error' => true,
                'message' => 'User not found',
            ], 404);
        }
        

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100' ],
            'email' => ['required', 'string', 'email', 'max:100','unique:users,email, '.$id],
            'password' => ['required', 'string', 'max:100'],
        ]);
        if($validator->fails()){
            return response()->json([
                'error' =>true,
                'message'=>$validator->errors()
            ],400);
        };
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password =$request->input('password'); 
        $user->save();
        return response()->json([
            'error' =>false,
            'message'=>"modified completed successfully",
            'data'=> $user,
        ],200);
    }


    public function showuser($id) {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'error' => true,
                'message' => 'User not found',
            ], 404);
        }

        return response()->json([
            'error' =>false,
            'data'=> $user,
        ]);
    }

    
    public function dalete($id) {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'error' => true,
                'message' => 'User not found',
            ], 404);
        }

        $user->delete();

        return response()->json([
            'error' =>false,
            'message'=> "deleted completed successfully",
        ]);
    }
}
