@extends('layouts.admin')

@section('content')

@if ($errors->any())
<div class="alert alert-danger">
  <button type="button" class="close" data-dismiss="alert">×</button>
  <ul>
      @foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
      @endforeach
  </ul>
</div><br/>
@endif

@if ($message = Session::get('success'))
<div class="alert alert-success alert-block">  
  <button type="button" class="close" data-dismiss="alert">×</button>
  {{ $message }}
</div>
@endif


    <h3>Работа с карточками</h3>
    <br>
    <table class="table table-hover">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">NHL ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        @foreach($cardstorages as $key => $cardstorage)
        <tr>
          <td>{{$key + 1}}</td>
          <td>{{$cardstorage->nhl_id}}</td>
          <td>{{$cardstorage->Player}}</td>
          <td>
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <div class="btn-group" role="group">
                      <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Действие
                      </button>
                      <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <form action="{{ route('storage.destroy', $cardstorage->id)}}" method="post">
                                @csrf
                                @method('DELETE')
                                <button class="dropdown-item" type="submit">Удалить</button>
                            </form>
                          
                          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#cardEdit{{$key}}">Изменить</a>
                      </div>
                  </div>
              </div>
          </td>
        </tr>
        @endforeach
        </tbody>
    </table>

    @foreach($cardstorages as $key => $cardstorage)
    <div class="modal  fade" id="cardEdit{{$key}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Изменение карточки</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form method="post" action="{{ route('storage.update', $cardstorage->id) }}">
                    @method('PATCH')
                    @csrf
                <div class="modal-body">
                    
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">ACC_AGI</div>
                                        </div>
                                        <input id="ACC_AGI" name="ACC_AGI" type="text" aria-describedby="ACC_AGIHelpBlock"
                                               class="form-control" value={{$cardstorage->ACC_AGI}}>
                                    </div>
                                    <span id="ACC_AGIHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">AGI_DUR</div>
                                        </div>
                                        <input id="AGI_DUR" name="AGI_DUR" type="text" aria-describedby="AGI_DURHelpBlock"
                                               class="form-control" value={{$cardstorage->AGI_DUR}}>
                                    </div>
                                    <span id="AGI_DURHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">AGR</div>
                                        </div>
                                        <input id="AGR" name="AGR" type="text" aria-describedby="AGRHelpBlock" class="form-control" value={{$cardstorage->AGR}}>
                                    </div>
                                    <span id="AGRHelpBlock" class="form-text text-muted">example: 89</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">BAL_END</div>
                                        </div>
                                        <input id="BAL_END" name="BAL_END" type="text" class="form-control"
                                               aria-describedby="BAL_ENDHelpBlock" value={{$cardstorage->BAL_END}}>
                                    </div>
                                    <span id="BAL_ENDHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">BLK_REC</div>
                                        </div>
                                        <input id="BLK_REC" name="BLK_REC" type="text" class="form-control"
                                               aria-describedby="BLK_RECHelpBlock" value={{$cardstorage->BLK_REC}}>
                                    </div>
                                    <span id="BLK_RECHelpBlock" class="form-text text-muted">example: 89</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">CHK</div>
                                        </div>
                                        <input id="CHK" name="CHK" type="text" class="form-control" aria-describedby="CHKHelpBlock" value={{$cardstorage->CHK}}>
                                    </div>
                                    <span id="CHKHelpBlock" class="form-text text-muted">example: 89</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">CHK_POS</div>
                                        </div>
                                        <input id="CHK_POS" name="CHK_POS" type="text" class="form-control"
                                               aria-describedby="CHK_POSHelpBlock" value={{$cardstorage->CHK_POS}}>
                                    </div>
                                    <span id="CHK_POSHelpBlock" class="form-text text-muted">example: 93</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">Card</div>
                                        </div>
                                        <input id="Card" name="Card" type="text" class="form-control" aria-describedby="CardHelpBlock" value={{$cardstorage->Card}}>
                                    </div>
                                    <span id="CardHelpBlock" class="form-text text-muted">example: PT</span>
                                </div>
                                <div class="form-group">
                                    <label for="Card_data">Card_data</label>
                                    <textarea id="Card_data" name="Card_data" cols="40" rows="5" class="form-control" value={{$cardstorage->Card_data}}></textarea>
                                </div>

                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">DAW_PPF</div>
                                        </div>
                                        <input id="DAW_PPF" name="DAW_PPF" type="text" class="form-control"
                                               aria-describedby="DAW_PPFHelpBlock" value={{$cardstorage->DAW_PPF}}>
                                    </div>
                                    <span id="DAW_PPFHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">DEF_RBC</div>
                                        </div>
                                        <input id="DEF_RBC" name="DEF_RBC" type="text" class="form-control"
                                               aria-describedby="DEF_RBCHelpBlock" value={{$cardstorage->DEF_RBC}}>
                                    </div>
                                    <span id="DEF_RBCHelpBlock" class="form-text text-muted">example: 98</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">DEK_ANG</div>
                                        </div>
                                        <input id="DEK_ANG" name="DEK_ANG" type="text" class="form-control"
                                               aria-describedby="DEK_ANGHelpBlock" value={{$cardstorage->DEK_ANG}}>
                                    </div>
                                    <span id="DEK_ANGHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">DIS_PAS</div>
                                        </div>
                                        <input id="DIS_PAS" name="DIS_PAS" type="text" class="form-control"
                                               aria-describedby="DIS_PASHelpBlock" value={{$cardstorage->DIS_PAS}}>
                                    </div>
                                    <span id="DIS_PASHelpBlock" class="form-text text-muted">example: 87</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">DUR</div>
                                        </div>
                                        <input id="DUR" name="DUR" type="text" class="form-control" aria-describedby="DURHelpBlock" value={{$cardstorage->DUR}}>
                                    </div>
                                    <span id="DURHelpBlock" class="form-text text-muted">example: 89</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">END_SPD</div>
                                        </div>
                                        <input id="END_SPD" name="END_SPD" type="text" class="form-control"
                                               aria-describedby="END_SPDHelpBlock" value={{$cardstorage->END_SPD}}>
                                    </div>
                                    <span id="END_SPDHelpBlock" class="form-text text-muted">example: 91</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">FO_RC</div>
                                        </div>
                                        <input id="FO_RC" name="FO_RC" type="text" class="form-control"
                                               aria-describedby="FO_RCHelpBlock" value={{$cardstorage->FO_RC}}>
                                    </div>
                                    <span id="FO_RCHelpBlock" class="form-text text-muted">example: 84</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">FS</div>
                                        </div>
                                        <input id="FS" name="FS" type="text" class="form-control" aria-describedby="FSHelpBlock" value={{$cardstorage->FS}}>
                                    </div>
                                    <span id="FSHelpBlock" class="form-text text-muted">example: 79</span>
                                </div>
                            </div>
                            <div class="col-sm-4">

                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">HAE_BRK</div>
                                        </div>
                                        <input id="HAE_BRK" name="HAE_BRK" type="text" class="form-control"
                                               aria-describedby="HAE_BRKHelpBlock" value={{$cardstorage->HAE_BRK}}>
                                    </div>
                                    <span id="HAE_BRKHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">HGT</div>
                                        </div>
                                        <input id="HGT" name="HGT" type="text" class="form-control" aria-describedby="HGTHelpBlock" value={{$cardstorage->HGT}}>
                                    </div>
                                    <span id="HGTHelpBlock" class="form-text text-muted">example: 5'11</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">HND_QCK</div>
                                        </div>
                                        <input id="HND_QCK" name="HND_QCK" type="text" class="form-control"
                                               aria-describedby="HND_QCKHelpBlock" value={{$cardstorage->HND_QCK}}>
                                    </div>
                                    <span id="HND_QCKHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">League</div>
                                        </div>
                                        <input id="League" name="League" type="text" class="form-control"
                                               aria-describedby="LeagueHelpBlock" value={{$cardstorage->League}}>
                                    </div>
                                    <span id="LeagueHelpBlock" class="form-text text-muted">example: NHL</span>
                                </div>

                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">OAW_POI</div>
                                        </div>
                                        <input id="OAW_POI" name="OAW_POI" type="text" class="form-control"
                                               aria-describedby="OAW_POIHelpBlock" value={{$cardstorage->OAW_POI}}>
                                    </div>
                                    <span id="OAW_POIHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">OVR</div>
                                        </div>
                                        <input id="OVR" name="OVR" type="text" class="form-control" aria-describedby="OVRHelpBlock" value={{$cardstorage->OVR}}>
                                    </div>
                                    <span id="OVRHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">PAS_FH</div>
                                        </div>
                                        <input id="PAS_FH" name="PAS_FH" type="text" class="form-control"
                                               aria-describedby="PAS_FHHelpBlock" value={{$cardstorage->PAS_FH}}>
                                    </div>
                                    <span id="PAS_FHHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">PC_GLH</div>
                                        </div>
                                        <input id="PC_GLH" name="PC_GLH" type="text" class="form-control"
                                               aria-describedby="PC_GLHHelpBlock" value={{$cardstorage->PC_GLH}}>
                                    </div>
                                    <span id="PC_GLHHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">POI_PKC</div>
                                        </div>
                                        <input id="POI_PKC" name="POI_PKC" type="text" class="form-control"
                                               aria-describedby="POI_PKCHelpBlock" value={{$cardstorage->POI_PKC}}>
                                    </div>
                                    <span id="POI_PKCHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">Player</div>
                                        </div>
                                        <input id="Player" name="Player" type="text" class="form-control"
                                               aria-describedby="PlayerHelpBlock" value={{$cardstorage->Player}}>
                                    </div>
                                    <span id="PlayerHelpBlock" class="form-text text-muted">example: Sidney Crosby</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">Position</div>
                                        </div>
                                        <input id="Position" name="Position" type="text" class="form-control"
                                               aria-describedby="PositionHelpBlock" value={{$cardstorage->Position}}>
                                    </div>
                                    <span id="PositionHelpBlock" class="form-text text-muted">example: C</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">SCH</div>
                                        </div>
                                        <input id="SCH" name="SCH" type="text" class="form-control" aria-describedby="SCHHelpBlock" value={{$cardstorage->SCH}}>
                                    </div>
                                    <span id="SCHHelpBlock" class="form-text text-muted">example: 97</span>
                                </div>
                                <div class="form-group">
                                    <label for="SHT_LOW">Text Field</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">SHT_LOW</div>
                                        </div>
                                        <input id="SHT_LOW" name="SHT_LOW" type="text" class="form-control"
                                               aria-describedby="SHT_LOWHelpBlock" value={{$cardstorage->SHT_LOW}}>
                                    </div>
                                    <span id="SHT_LOWHelpBlock" class="form-text text-muted">example: 96</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">SKT_HGH</div>
                                        </div>
                                        <input id="SKT_HGH" name="SKT_HGH" type="text" class="form-control"
                                               aria-describedby="SKT_HGHHelpBlock" value={{$cardstorage->SKT_HGH}}>
                                    </div>
                                    <span id="SKT_HGHHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">SPD_VIS</div>
                                        </div>
                                        <input id="SPD_VIS" name="SPD_VIS" type="text" class="form-control"
                                               aria-describedby="SPD_VISHelpBlock" value={{$cardstorage->SPD_VIS}}>
                                    </div>
                                    <span id="SPD_VISHelpBlock" class="form-text text-muted">example: 99</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">SSA_GLL</div>
                                        </div>
                                        <input id="SSA_GLL" name="SSA_GLL" type="text" class="form-control"
                                               aria-describedby="SSA_GLLHelpBlock" value={{$cardstorage->SSA_GLL}}>
                                    </div>
                                    <span id="SSA_GLLHelpBlock" class="form-text text-muted">example: 95</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">SSP_STH</div>
                                        </div>
                                        <input id="SSP_STH" name="SSP_STH" type="text" class="form-control"
                                               aria-describedby="SSP_STHHelpBlock" value={{$cardstorage->SSP_STH}}>
                                    </div>
                                    <span id="SSP_STHHelpBlock" class="form-text text-muted">example: 96</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">STR</div>
                                        </div>
                                        <input id="STR" name="STR" type="text" class="form-control" aria-describedby="STRHelpBlock" value={{$cardstorage->STR}}>
                                    </div>
                                    <span id="STRHelpBlock" class="form-text text-muted">example: 93</span>
                                </div>
                            </div>
                            <div class="col-sm-4">



                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">Shoots</div>
                                        </div>
                                        <input id="Shoots" name="Shoots" type="text" class="form-control"
                                               aria-describedby="ShootsHelpBlock" value={{$cardstorage->Shoots}}>
                                    </div>
                                    <span id="ShootsHelpBlock" class="form-text text-muted">example: Left</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">Team</div>
                                        </div>
                                        <input id="Team" name="Team" type="text" class="form-control" aria-describedby="TeamHelpBlock" value={{$cardstorage->Team}}>
                                    </div>
                                    <span id="TeamHelpBlock" class="form-text text-muted">example: PIT</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">Type</div>
                                        </div>
                                        <input id="Type" name="Type" type="text" class="form-control" aria-describedby="TypeHelpBlock" value={{$cardstorage->Type}}>
                                    </div>
                                    <span id="TypeHelpBlock" class="form-text text-muted">example: PLY</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">WGT</div>
                                        </div>
                                        <input id="WGT" name="WGT" type="text" class="form-control" aria-describedby="WGTHelpBlock" value={{$cardstorage->WGT}}>
                                    </div>
                                    <span id="WGTHelpBlock" class="form-text text-muted">example: 200</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">WSA_STL</div>
                                        </div>
                                        <input id="WSA_STL" name="WSA_STL" type="text" class="form-control"
                                               aria-describedby="WSA_STLHelpBlock" value={{$cardstorage->WSA_STL}}>
                                    </div>
                                    <span id="WSA_STLHelpBlock" class="form-text text-muted">example: 97</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">WSP_AGG</div>
                                        </div>
                                        <input id="WSP_AGG" name="WSP_AGG" type="text" class="form-control"
                                               aria-describedby="WSP_AGGHelpBlock" value={{$cardstorage->WSP_AGG}}>
                                    </div>
                                    <span id="WSP_AGGHelpBlock" class="form-text text-muted">example: 94</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">Year</div>
                                        </div>
                                        <input id="Year" name="Year" type="text" class="form-control" aria-describedby="YearHelpBlock" value={{$cardstorage->Year}}>
                                    </div>
                                    <span id="YearHelpBlock" class="form-text text-muted">example: 19</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">aOVR</div>
                                        </div>
                                        <input id="aOVR" name="aOVR" type="text" class="form-control" aria-describedby="aOVRHelpBlock" value={{$cardstorage->aOVR}}>
                                    </div>
                                    <span id="aOVRHelpBlock" class="form-text text-muted">example: 2019</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">age</div>
                                        </div>
                                        <input id="age" name="age" type="text" class="form-control" aria-describedby="ageHelpBlock" value={{$cardstorage->age}}>
                                    </div>
                                    <span id="ageHelpBlock" class="form-text text-muted">example: 31</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">create_date</div>
                                        </div>
                                        <input id="create_date" name="create_date" type="text" class="form-control"
                                               aria-describedby="create_dateHelpBlock" value={{$cardstorage->create_date}}>
                                    </div>
                                    <span id="create_dateHelpBlock" class="form-text text-muted">example: 0000-00-00 00:00:00</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">hutdb_id</div>
                                        </div>
                                        <input id="hutdb_id" name="hutdb_id" type="text" class="form-control"
                                               aria-describedby="hutdb_idHelpBlock" value={{$cardstorage->hutdb_id}}>
                                    </div>
                                    <span id="hutdb_idHelpBlock" class="form-text text-muted">example: 31397</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">jersey</div>
                                        </div>
                                        <input id="jersey" name="jersey" type="text" class="form-control"
                                               aria-describedby="jerseyHelpBlock" value={{$cardstorage->jersey}}>
                                    </div>
                                    <span id="jerseyHelpBlock" class="form-text text-muted">example: 31</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">nationality</div>
                                        </div>
                                        <input id="nationality" name="nationality" type="text" class="form-control"
                                               aria-describedby="nationalityHelpBlock" value={{$cardstorage->nationality}}>
                                    </div>
                                    <span id="nationalityHelpBlock" class="form-text text-muted">example: Canada</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">nhl_id</div>
                                        </div>
                                        <input id="nhl_id" name="nhl_id" type="text" class="form-control"
                                               aria-describedby="nhl_idHelpBlock" value={{$cardstorage->nhl_id}}>
                                    </div>
                                    <span id="nhl_idHelpBlock" class="form-text text-muted">example: 8471675</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">picture</div>
                                        </div>
                                        <input id="picture" name="picture" type="text" class="form-control"
                                               aria-describedby="pictureHelpBlock" value={{$cardstorage->picture}}>
                                    </div>
                                    <span id="pictureHelpBlock" class="form-text text-muted">example: 7337</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">salary</div>
                                        </div>
                                        <input id="salary" name="salary" type="text" class="form-control"
                                               aria-describedby="salaryHelpBlock" value={{$cardstorage->salary}}>
                                    </div>
                                    <span id="salaryHelpBlock" class="form-text text-muted">example: 8700000</span>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">synergy</div>
                                        </div>
                                        <input id="synergy" name="synergy" type="text" class="form-control"
                                               aria-describedby="synergyHelpBlock" value={{$cardstorage->synergy}}>
                                    </div>
                                    <span id="synergyHelpBlock" class="form-text text-muted">example: {"PP":2,"DZ":1}</span>
                                </div>
                            </div>
                        </div>


                       {{-- <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <button name="submit" type="submit" class="btn btn-primary">Сохранить</button>
                                </div>
                            </div>
                        </div>--}}

                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="submit" class="btn btn-primary">Сохранить</button>
                </div>

            </form>
            </div>
        </div>
    </div>
    @endforeach
@endsection