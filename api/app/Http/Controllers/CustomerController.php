<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admins');
    }

    public function index()
    {
        return DB::table('users')->whereIn('account_type', [0, 2])->get();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

    public function updateStatus(Request $request)
    {
        $this->validate($request, [
            'id' => 'required',
            'status' => 'required',
        ]);
        DB::table('users')->where('id', $request->id)->update([
            'status' => $request->status
        ]);
        return $request->all();
    }
}
