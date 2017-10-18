<template>
    <div id="modal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">About Pokémon Battle</h4>
                </div>
                <div class="modal-body">
                    <p>This game considers the traditional Pokémon table of advantages/disadvantages. </br>
                    For instance, Electric attacks causes double damage over Water Pokémons but only half
                    on a Grass type. 
                    </p>
                    <p>
                    Also, each attack has a probability to fail (miss the target) or cause critical damage (double damage).
                    Basically, this calculation considers attacker's strength, target's defense, a multiplier regarding 
                    types and a random value.
                    </p>
                    <p>Have fun!</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">
                        <i class="fa fa-check" aria-hidden="true"></i> Got it!
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./help.js"></script>